import { useEffect, useState} from "react";
import { FaAngleDown} from "react-icons/fa";
import './Faq.css'
import Loader from "../AlertAndLoader/Loader";
const Faq= () => {


    useEffect(() => {

      document.querySelectorAll(".faq-question").forEach(function (question) {
        question.addEventListener("click", function () {
          var answer = this.querySelector(".faq-answer");
          var icon = this.querySelector(".faq-icon");

          // Hide all answers and change all icons to "+"
          document.querySelectorAll(".faq-answer").forEach(function (ans) {
            if (ans !== answer) {
              ans.style.display = "none";
            }
          });

          document.querySelectorAll(".faq-icon").forEach(function (icn) {
            if (icn !== icon) {
              icn.classList.remove("fa-angle-up");
              icn.classList.add("fa-angle-down");
            }
          });

          // Remove box shadow from all questions
          document.querySelectorAll(".faq-question").forEach(function (q) {
            if (q !== question) {
              q.style.boxShadow = "none";
            }
          });

          if (answer.style.display === "none" || answer.style.display === "") {
            // Show the clicked answer and change its icon to "-"
            answer.style.display = "block";
            icon.classList.remove("fa-angle-down");
            icon.classList.add("fa-angle-up");
            question.style.boxShadow =
              "0px 0px 2px 0px rgba(255, 255, 255, 0.75)";
          } else {
            // Hide the clicked answer and change its icon to "+"
            answer.style.display = "none";
            icon.classList.remove("fa-angle-up");
            icon.classList.add("fa-angle-down");
            question.style.boxShadow = "none";
          }
        });
      });

      document.querySelectorAll(".faq-question").forEach(function (question) {
        question.addEventListener("click", function () {
          // Hide all answers
          document.querySelectorAll(".faq-answer").forEach(function (answer) {
            answer.style.maxHeight = null;
          });

          // Show the clicked answer
          var answer = this.querySelector(".faq-answer");
          if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
          } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
          }
        });
      });

      // Function to change color based on intersection
      function changeColor(entries) {
        entries.forEach((entry) => {
          const targetId = entry.target.id;
          const correspondingElement = document.querySelector(
            `[data-faq-queSec="${targetId}"]`
          );

          if (entry.isIntersecting) {
            correspondingElement.style.color = "#3FEB8C"; // Change to your desired color
          } else {
            correspondingElement.style.color = ""; // Change to the default color or another color
          }
        });
      }

      // Initialize Intersection Observer
      const observer = new IntersectionObserver(changeColor, {
        threshold: 0.5,
      });

      // Observe each target element
      document.querySelectorAll(".faq-queSec").forEach((target) => {
        observer.observe(target);
      });
    },[])

      const [loading, setLoading] = useState(true);
      useEffect(() => {
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      }, []);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <div className="faq-imgsec">
            <p className="faq-FAQ">FAQ</p>
          </div>
          <div className="faq-faqsec">
            <div className="faq-topics">
              <ul className="faq-topicsList">
                <li className="faq-topicItem faq-specialItem">
                  <a href="#faq-section1" data-faq-queSec="faq-section1">
                    Registration
                  </a>
                </li>

                <li className="faq-topicItem">
                  <a href="#faq-section2" data-faq-queSec="faq-section2">
                    {" "}
                    Accommodation
                  </a>
                </li>

                <li className="faq-topicItem">
                  <a href="#faq-section3" data-faq-queSec="faq-section3">
                    Payments and Charges
                  </a>
                </li>
                <li className="faq-topicItem">
                  <a href="#faq-section4" data-faq-queSec="faq-section4">
                    Campus Facilities
                  </a>
                </li>
                <li className="faq-topicItem">
                  <a href="#faq-section5" data-faq-queSec="faq-section5">
                    Pronites and Concerts
                  </a>
                </li>
              </ul>
            </div>
            <div className="faq-questions">
              <section id="faq-section1" className="faq-queSec">
                <p className="faq-categories">Registration</p>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>How do I register for AURORA&apos;24?</p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    You can register for each event in Aurora&apos;20. This can
                    be done by going to
                    <a href="https://aurorafest.in/events">
                      https://aurorafest.in/events
                    </a>
                    and browsing to the event you are interested in registering
                    for. Then, click on the event, and open the
                    &apos;Register&apos; tab. You will be prompted to log in, or
                    create a new account in case you do not have an account.
                    Then, you may fill up the appropriate registration form.
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>What to do after completing registration?</p>
                    <span className="faq-icon">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    After completing the registration for the event you are
                    interested in, you must proceed to pay the required fee for
                    the event. The payment must be done online, via payment
                    option given on Registration or from dashboard.
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>
                      How can I be part of the organizing team of Aurora&apos;20
                      and what are its benefits?
                    </p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    You can become a college ambassador for your college, and
                    you will become the primary point of contact between your
                    college and the Aurora&apos;20 team. For further queries,
                    you may reach out to us on
                    <a href="https://aurorafest.org/contact">
                      https://aurorafest.org/contact
                    </a>
                    .
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>Can people of any age-group attend Aurora&apos;20?</p>
                    <span className="faq-icon">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    Yes, people of any age group can attend Aurora&apos;20, but
                    some events may have age restrictions.
                  </p>
                </div>
              </section>
              <section id="faq-section2" className="faq-queSec">
                <p className="faq-categories">Accommodation</p>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>What are the accommodation policies?</p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    Accommodation Charges: Accommodation charges are INR 799 per
                    candidate. It includes charges for accommodation and 3
                    Pronites and Proshows.
                    <br />
                    <strong>
                      Early and late charges before 13th Feb, 2020, 7:00 PM and
                      late charges after 17th Feb, 2020, 10:00 AM will be
                      applicable.
                    </strong>
                    Accommodation will be provided on a first-come, first-serve
                    basis and is subject to availability. <br />
                    <strong>It does not include a food facility.</strong>
                    Guests can purchase their meals from the cafeteria, food
                    stalls, night cafeteria, or hostel messes at subsidized
                    rates.
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>What are the check-in and check-out timings?</p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    Check-In - Anytime after 13th Feb, 2020, 7:00 PM
                    <br />
                    Check Out - on or before 17th Feb, 2020, 10:00 AM
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>What kind of accommodation is provided?</p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    Accommodation is provided on a shared basis inside campus
                    hostels. Girls and boys will be accommodated separately. The
                    number of guests in a room will be decided by Aurora and
                    will be allotted by the Aurora Hospitality team.
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>What kind of food facilities are available?</p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    Guests can purchase their meals from the cafeteria, food
                    stalls, night cafeteria, or hostel messes at subsidized
                    rates. You can also order food online.
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>What about the security facilities?</p>
                    <span className="faq-icon">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    IIITM Gwalior campus has a vigilant and round-the-clock
                    security service. There will be additional security to avoid
                    thefts and other mishaps. Although Aurora team will not be
                    responsible for any mishaps. Guests are requested to take
                    care of their luggage and valuable items.
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>Documents that I should carry?</p>
                    <span className="faq-icon">
                      <FaAngleDown />
                    </span>
                  </div>
                  <div className="faq-answer">
                    <ol>
                      <li>Any valid Govt photo ID</li>
                      <li>Print out of Email confirmation</li>
                      <li>Gate pass</li>
                      <li>Valid College ID for participants</li>
                    </ol>
                  </div>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>Shall I carry my ID card with me?</p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    It is mandatory for all guest participants to carry college
                    IDs. This is for your own convenience. Moreover, you will be
                    asked to produce your college ID cards at the time of
                    allotment of rooms.
                  </p>
                </div>
              </section>
              <section id="faq-section3" className="faq-queSec">
                <p className="faq-categories">Payments and Charges</p>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>What is the payment procedure?</p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    The payment procedure will be online. You can check the
                    following link to register and avail accommodation:
                    <a href="https://aurorafest.org/">
                      https://aurorafest.org/
                    </a>
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>What are the charges for the Pronites exclusively?</p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    Only Pronite: INR 349 (For all 3 Pronites), and must be made
                    online.
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>
                      What are the charges for the Pronites after I have
                      registered for an event or accommodation?
                    </p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    Pronites are bundled with accommodation (If you purchase
                    accommodation you need not to purchase pronite passes).
                    <br />
                    If you participate in category A events (Parivesh, Corna,
                    Mr. and Ms. Aurora, Dancing Dyad, Beat the Beat, A-Capella,
                    On-Spot Painting/Sketching, Open Mic, Morning Radio), you
                    get ₹100 off on pronites. <br />
                    If you participate in category B events (Synchro Funk, Raag,
                    Acoustic Corner, Graffathon, Silver Screen, Nukkad Natak,
                    IPL-Auction, Quizzes, CS-GO, PUBG), you get ₹50 off on
                    pronites. <br />A maximum discount of ₹100 can be availed
                    using event registrations.
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>How do I know if my payment is confirmed?</p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    You will receive an email from us confirming your
                    registration and payment immediately.
                  </p>
                </div>
              </section>
              <section id="faq-section4" className="faq-queSec">
                <p className="faq-categories">Campus Facilities</p>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>How can I reach ABV-IIITM Gwalior Campus?</p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    ABV-IIITM Gwalior is located in Hazira, Gwalior, around 6
                    kms from Gwalior Railway Station and 9 kms from Gwalior
                    Airport. The campus is well connected by roads to all
                    important places in Gwalior and one can easily reach the
                    campus by taxis and auto rickshaws.
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>Are there any Hospital facilities in Campus?</p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    Yes, ABV-IIITM Campus has a separate Hospital wing and an
                    in-campus Ambulance fully equipped for any medical
                    emergency.
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>What all facilities are available in the Campus?</p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    ABV-IIITM Campus houses Cafeteria, Juice Centre, ATM&apos;s,
                    E-Rickshaws for in-campus traveling, Sports Complex, and
                    many more facilities.
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>Can I enter Campus anytime?</p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    No, the entry timings of Campus are 6 am to 10.30 pm.
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>How to find the way to any event in the Campus?</p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    Sign-boards have been put up at every part of the Campus for
                    assistance in finding venues of all events.
                  </p>
                </div>
              </section>
              <section id="faq-section5" className="faq-queSec">
                <p className="faq-categories">Pronites and Concerts</p>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>
                      Can I leave and enter Pronite again with the same pass?
                    </p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    Yes, you may re-enter a pronite with the same pass.
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>What things are not allowed in the Pronites?</p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <div className="faq-answer">
                    The following items are not allowed in pronites:
                    <ol>
                      <li>Weapons and firearms</li>
                      <li>
                        Alcoholic beverages, cigarettes, or illegal substances
                      </li>
                      <li>Outside food and beverages</li>
                      <li>
                        Distracting items such as noisemakers, lasers, or boards
                      </li>
                    </ol>
                  </div>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>
                      Will I be provided passes for attending all Events and
                      Pronites?
                    </p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    Yes, you will be given passes for attending all the 3
                    pronites.
                  </p>
                </div>
                <div className="faq-question">
                  <div className="faq-que">
                    <p>
                      When and where will the passes for the Concerts be
                      distributed?
                    </p>
                    <span className="faq-icon ">
                      <FaAngleDown />
                    </span>
                  </div>
                  <p className="faq-answer">
                    After online payment, a unique QR code will be mailed, which
                    will be used for entry for the pronites. Wristbands will be
                    provided at the entry to the campus.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}



export default Faq;
