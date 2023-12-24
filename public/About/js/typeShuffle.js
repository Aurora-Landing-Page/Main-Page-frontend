import 'splitting/dist/splitting.css';
import 'splitting/dist/splitting-cells.css';
import Splitting from 'splitting';
import { randomNumber } from './utils';

/**
 * Class representing one line
 */
class Line {
	// line position
    position = -1;
    // cells/chars
    cells = [];

	/**
	 * Constructor.
	 * @param {Element} DOM_el - the char element (<span>)
	 */
	constructor(linePosition) {
		this.position = linePosition;
	}
}

/**
 * Class representing one cell/char
 */
class Cell {
	// DOM elements
	DOM = {
		// the char element (<span>)
		el: null,
	};
    // cell position
    position = -1;
    // previous cell position
    previousCellPosition = -1;
    // original innerHTML
    original;
    // current state/innerHTML
    state;
    color;
    originalColor;
    // cached values
    cache;

	/**
	 * Constructor.
	 * @param {Element} DOM_el - the char element (<span>)
	 */
	constructor(DOM_el, {
        position,
        previousCellPosition
    } = {}) {
		this.DOM.el = DOM_el;
        this.original = this.DOM.el.innerHTML;
        this.state = this.original;
        this.color = this.originalColor = getComputedStyle(document.documentElement).getPropertyValue('--color-text');
        this.position = position;
        this.previousCellPosition = previousCellPosition;
	}
    /**
     * @param {string} value
     */
    set(value) {
        this.state = value;
        this.DOM.el.innerHTML = this.state;
    }
}

/**
 * Class representing the TypeShuffle object
 */
export class TypeShuffle {
	// DOM elements
	DOM = {
		// the main text element
		el: null,
	};
    // array of Line objs
    lines = [];
    // array of letters and symbols
    lettersAndSymbols = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', '!', '@', '#', '$', '&', '*', '(', ')', '-', '_', '+', '=', '/', '[', ']', '{', '}', ';', ':', '<', '>', ',', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    // effects and respective methods
    effects = {
        'fx5': () => this.fx5(),
        
    };
    totalChars = 0;

	/**
	 * Constructor.
	 * @param {Element} DOM_el - main text element
	 */
	constructor(DOM_el) {
        this.DOM.el = DOM_el;
        // Apply Splitting (two times to have lines, words and chars)
        const results = Splitting({
            target: this.DOM.el,
            by: 'lines'
        })
        results.forEach(s => Splitting({ target: s.words }));
        
        // for every line
        for (const [linePosition, lineArr] of results[0].lines.entries()) {
            // create a new Line
            const line = new Line(linePosition);
            let cells = [];
            let charCount = 0;
            // for every word of each line
            for (const word of lineArr) {
                // for every character of each line
                for (const char of [...word.querySelectorAll('.char')]) {
                    cells.push(
                        new Cell(char, {
                            position: charCount,
                            previousCellPosition: charCount === 0 ? -1 : charCount-1
                        })
                    );
                    ++charCount;
                }
            }
            line.cells = cells;
            this.lines.push(line);
            this.totalChars += charCount;
        }

        // TODO
        // window.addEventListener('resize', () => this.resize());
	}
    /**
     * clear all the cells chars
     */
    clearCells() {
        for (const line of this.lines) {
            for (const cell of line.cells) {
                cell.set('&nbsp;');
            }    
        }
    }
    /**
     * 
     * @returns {string} a random char from this.lettersAndSymbols
     */
    getRandomChar() {
        return this.lettersAndSymbols[Math.floor(Math.random() * this.lettersAndSymbols.length)];
    }
    /**
     * Effect 1 - clear cells and animate each line cells (delays per line and per cell)
     */

    fx5() {
        // max iterations for each cell to change the current value
        const MAX_CELL_ITERATIONS = 30;
        let finished = 0;
        this.clearCells();
        
        const loop = (line, cell, iteration = 0) => {
            cell.cache = {'state': cell.state, 'color': cell.color};
            
            if ( iteration === MAX_CELL_ITERATIONS-1 ) {
                cell.color = cell.originalColor;
                cell.DOM.el.style.color = cell.color;
                cell.set(cell.original);

                ++finished;
                if ( finished === this.totalChars ) {
                    this.isAnimating = false;
                }
            }
            else if ( cell.position === 0 ) {
                cell.color = ['#3e775d', '#61dca3', '#61b3dc'][Math.floor(Math.random() * 3)]
                cell.DOM.el.style.color = cell.color
                cell.set(iteration < 9 ? 
                        ['*', '-', '\u0027', '\u0022'][Math.floor(Math.random() * 4)] : 
                        this.getRandomChar());
            }
            else {
                cell.set(line.cells[cell.previousCellPosition].cache.state);
                
                cell.color = line.cells[cell.previousCellPosition].cache.color
                cell.DOM.el.style.color = cell.color
            }
            
            if ( cell.cache.state != '&nbsp;' ) {
                ++iteration;
            }

            if ( iteration < MAX_CELL_ITERATIONS ) {
                setTimeout(() => loop(line, cell, iteration), 10);
            }
        };

        for (const line of this.lines) {
            for (const cell of line.cells) {
                setTimeout(() => loop(line, cell), (line.position+1)*200);
            }
        }
    }
   
    /**
     * call the right effect method (defined in this.effects)
     * @param {string} effect - effect type
     */
    trigger(effect = 'fx5') {
        if ( !(effect in this.effects) || this.isAnimating ) return;
        this.isAnimating = true;
        this.effects[effect]();
    }
}