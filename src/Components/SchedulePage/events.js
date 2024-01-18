const plans = [
    {
      id: "1",
      day: "Wednesday",
      date:"Feb 14",
      data:[
        {
            Title:"hello",
            Content:"Sway away",
            Day:"Wednesday",
            Date:"12th February , 2023",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
            "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
            " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
            " hendrerit varius.",
                Time:"10:00",
                Venue:"OAT"
        },
        {
            Title:"Swing Away",
            Content:"Dance away",
            Day:"Wednesday",
            Date:"11th February , 2023",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
            "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
            " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
            " hendrerit varius.",
                Time:"16:00",
                Venue:"OAT"

        },
        {
            Title:"Parivesh",
            Content:"Show Off",
            Date:"11th February , 2023",
            Day:"Tuesday",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
                "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
                " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
                " hendrerit varius.",
            Time:"18:00",
            Venue:"OAT"

        },
        {
            Title:"Mood",
            Content:"Sway away",
            Day:"Wednesday",
            Date:"12th February , 2023",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
            "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
            " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
            " hendrerit varius.",
                Time:"10:00",
                Venue:"OAT"

        },
        {
            Title:"Swing Away",
            Content:"Dance away",
            Day:"Wednesday",
            Date:"11th February , 2023",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
            "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
            " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
            " hendrerit varius.",
                Time:"16:00",
                Venue:"OAT"

        },
        {
            Title:"Parivesh",
            Content:"Show Off",
            Date:"11th February , 2023",
            Day:"Tuesday",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
                "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
                " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
                " hendrerit varius.",
            Time:"18:00",
            Venue:"OAT"

        },
        {
            Title:"Mood",
            Content:"Sway away",
            Day:"Wednesday",
            Date:"12th February , 2023",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
            "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
            " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
            " hendrerit varius.",
                Time:"10:00",
                Venue:"OAT"

        },
        ]
    },
    {
      id: "2",
      day: "Thursday",
      date:"Feb 15",
      data:[
        {
            Title:"hi",
            Content:"Sway away",
            Day:"Wednesday",
            Date:"12th February , 2023",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
            "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
            " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
            " hendrerit varius.",
                Time:"10:00",
                Venue:"OAT"
        },
        {
            Title:"Swing Away",
            Content:"Dance away",
            Day:"Wednesday",
            Date:"11th February , 2023",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
            "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
            " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
            " hendrerit varius.",
                Time:"16:00",
                Venue:"OAT"

        },
        {
            Title:"Parivesh",
            Content:"Show Off",
            Date:"11th February , 2023",
            Day:"Tuesday",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
                "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
                " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
                " hendrerit varius.",
            Time:"18:00",
            Venue:"OAT"

        },
        {
            Title:"Mood",
            Content:"Sway away",
            Day:"Wednesday",
            Date:"12th February , 2023",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
            "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
            " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
            " hendrerit varius.",
                Time:"10:00",
                Venue:"OAT"

        },
        {
            Title:"Swing Away",
            Content:"Dance away",
            Day:"Wednesday",
            Date:"11th February , 2023",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
            "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
            " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
            " hendrerit varius.",
                Time:"16:00",
                Venue:"OAT"

        },
        {
            Title:"Parivesh",
            Content:"Show Off",
            Date:"11th February , 2023",
            Day:"Tuesday",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
                "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
                " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
                " hendrerit varius.",
            Time:"18:00",
            Venue:"OAT"

        },
        {
            Title:"Mood",
            Content:"Sway away",
            Day:"Wednesday",
            Date:"12th February , 2023",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
            "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
            " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
            " hendrerit varius.",
                Time:"10:00",
                Venue:"OAT"

        },
        ]
    },
    {
      id: "3",
      day: "Friday",
      date:"Feb 16",
      data:[
        {
            Title:"Namaste",
            Content:"Sway away",
            Day:"Wednesday",
            Date:"12th February , 2023",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
            "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
            " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
            " hendrerit varius.",
                Time:"10:00",
                Venue:"OAT"
        },
        {
            Title:"Swing Away",
            Content:"Dance away",
            Day:"Wednesday",
            Date:"11th February , 2023",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
            "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
            " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
            " hendrerit varius.",
                Time:"16:00",
                Venue:"OAT"

        },
        {
            Title:"Parivesh",
            Content:"Show Off",
            Date:"11th February , 2023",
            Day:"Tuesday",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
                "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
                " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
                " hendrerit varius.",
            Time:"18:00",
            Venue:"OAT"

        },
        {
            Title:"Mood",
            Content:"Sway away",
            Day:"Wednesday",
            Date:"12th February , 2023",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
            "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
            " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
            " hendrerit varius.",
                Time:"10:00",
                Venue:"OAT"

        },
        {
            Title:"Swing Away",
            Content:"Dance away",
            Day:"Wednesday",
            Date:"11th February , 2023",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
            "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
            " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
            " hendrerit varius.",
                Time:"16:00",
                Venue:"OAT"

        },
        {
            Title:"Parivesh",
            Content:"Show Off",
            Date:"11th February , 2023",
            Day:"Tuesday",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
                "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
                " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
                " hendrerit varius.",
            Time:"18:00",
            Venue:"OAT"

        },
        {
            Title:"Mood",
            Content:"Sway away",
            Day:"Wednesday",
            Date:"12th February , 2023",
            Description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut efficitur orci. Integer ac tincidunt nisi. Nunc cursus lacinia lectus, vitae luctus urna volutpat eget. " +
            "Aenean aliquam facilisis nisl, a viverra elit laoreet ut. Quisque feugiat libero vitae dui convallis, a fermentum enim dapibus. Nulla facilisi. Nulla facilisi. Phasellus vestibulum tellus nec odio fringilla," +
            " a fringilla orci laoreet. Integer luctus, metus vel tempor cursus, libero odio ultricies mauris, id tincidunt ligula eros vel justo. Maecenas id ligula vel quam fermentum tincidunt. Quisque quis orci nec dui" +
            " hendrerit varius.",
                Time:"10:00",
                Venue:"OAT"

        },
        ]
    },
    
  ];

export default plans;