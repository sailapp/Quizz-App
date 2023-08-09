const htmlQuestions = [
    {
        questions: "Who is making the web standards?",
        answers:{
            a: "Mozilla",
            b: "Microsoft",
            c: "The World Wide Web Consortium",
            d: "Programmer"
        },
        correctAnswer: 'c'
    },
    {
        questions: "What does HTML stands for?",
        answers:{
            a: "Hyperlinks and Text Markup Language",
            b: "Hyper Text Markup Language",
            c: "Home Tool Markup Language",
            d: "Home Text Mark Language"
        },
        correctAnswer: 'b'
    },
    {
        questions: "HTML attributes always appear where?",
        answers:{
            a: "Between the tags",
            b: "In the closing tag",
            c: "After the closing tag",
            d: "In the opening tag"
        },
        correctAnswer: 'd'
    },
    {
        questions: "Which is the correct HTML element for inserting a line break?",
        answers:{
            a: "<",
            b: "^",
            c: "*",
            d: "/"
        },
        correctAnswer: 'd'
    },
    {
        questions: "How is document type initialized in HTML5.?",
        answers:{
            a: "</DOCTYPE HTML>",
            b: "</DOCTYPE>",
            c: "<!DOCTYPE HTML>",
            d: "<!DOCTYPE HTML>"
        },
        correctAnswer: 'c'
    },
    {
        questions: "Which of the following HTML Elements is used for making any text bold ?",
        answers:{
            a: "<ui>",
            b: "<i>",
            c: "<em>",
            d: "<ul>"
        },
        correctAnswer: 'd'
    },
    {
        questions: "How many heading tags are there in HTML5?",
        answers:{
            a: "2",
            b: "3",
            c: "5",
            d: "6"
        },
        correctAnswer: 'd'
    },
    {
        questions: "Which of the following attributes is used to add link to any element?",
        answers:{
            a: "href",
            b: "ref",
            c: "link",
            d: "newref"
        },
        correctAnswer: 'a'
    },
    {
        questions: "Which of the following is the correct way of creating an hyperlink in HTML?",
        answers:{
            a: "<a>www.geeksforgeeks.org <Geeksforgeeks /a>",
            b: "<a href=“www.geeksforgeeks.org” Geeksforgeeks /a>",
            c: "<a href= “www.geeksforgeeks.org”>Geeksforgeeks</a>",
            d: "<a link=“www.geeksforgeeks.org” Geeksforgeeks> </a>"
        },
        correctAnswer: 'c'
    },
    {
        questions: "What is the purpose of using div tags in HTML?",
        answers:{
            a: "For creating Different styles",
            b: "For creating different sections",
            c: "For adding headings",
            d: "For adding titles"
        },
        correctAnswer: 'b'
    },
    {
        questions: "Which of the following tags is used to make a portion of text italic in HTML?",
        answers:{
            a: "<italic>",
            b: "<style= “i”>",
            c: "<i>",
            d: "<style=“italic”>"
        },
        correctAnswer: 'c'
    },
    {
        questions: "Which of the following is the correct way to add background color in HTML?",
        answers:{
            a: "<body color = “green”>",
            b: "<body bg-color = “green”>",
            c: "<body style = “background-color=green”>",
            d: "<body style = “background-color: green;”>"
        },
        correctAnswer: 'd'
    },
    {
        questions: "Which among the following is correct HTML code for making a checkbox?",
        answers:{
            a: "<checkbox>",
            b: "<input type='checkbox'>",
            c: "<check>",
            d: "<input type='check'>"
        },
        correctAnswer: 'd'
    },
    {
        questions: "Which tag is used for creating a drop-down selection list?",
        answers:{
            a: "<select>",
            b: "<option>",
            c: "<dropdown>",
            d: "<list>"
        },
        correctAnswer: 'a'
    },
    {
        questions: "Which tag is used to add an header in HTML5 table?",
        answers:{
            a: "<theader>",
            b: "<h1>",
            c: "<th>",
            d: "<header>"
        },
        correctAnswer: 'c'
    },
    {
        questions: "Which tag is used to add an header in HTML5 table?",
            answers:{
                a: "<table> , <tbody> , <trow>",
                b: "<table> , <tb> , <trow>",
                c: "<th>",
                d: "<table> , <tbody> , <tr>"
            },
            correctAnswer: 'd'
    },
    {
        questions: "Which among the following is the correct way in HTML to insert an image?",
            answers:{
                a: "<img url=“https://bit.ly/2FicgIx”>Geeksforgeeks</img>",
                b: "<img href=“https://bit.ly/2FicgIx” alt= “Geeksforgeeks”></img>",
                c: "<img src=“https://bit.ly/2FicgIx” alt=“Geeksforgeeks”>",
                d: "<image src=“https://bit.ly/2FicgIx” alt=“Geeksforgeeks”></image>"
            },
            correctAnswer: 'c'
    },
]
      
const cssQuestion = [
    {
        questions: "What does CSS stand for?",
            answers:{
                a: "Creative Style Sheets",
                b: "Cascading Style Sheets",
                c: "Colorful Style Spread",
                d: "Computer Style Spread"
            },
            correctAnswer: 'b'
    },
    {
        questions: "CSS allows you to format what?",
            answers:{
                a: "Fonts and line spacing",
                b: "Shading, graphics, margins, and padding",
                c: "Colors, borders, and backgrounds",
                d: "All of these"
            },
            correctAnswer: 'd'
    },
    {
        questions: "What open and closes style sets in a CSS document?",
            answers:{
                a: "()",
                b: "[]",
                c: "<>",
                d: "{}"
            },
            correctAnswer: 'd'
    },
    {
        questions: "Which of the following code snippets will select all <img> tags on a page and give them a height of 200 pixels?",
            answers:{
                a: "<img style='height:200px;'>",
                b: "tag='img' {height: 200px;}",
                c: "img {height: 200px;}",
                d: "<img> {height: 200px;}"
            },
            correctAnswer: 'c'
    },
    {
        questions: "Which of the following is a valid css rule?",
            answers:{
                a: "h1 {color: blue;}",
                b: "style=color:blue",
                c: "css='color:blue'",
                d: "h1 { color:blue;}"
            },
            correctAnswer: 'a'
    },
     {
        questions: "Which is the value in this CSS? p {color: red;}",
            answers:{
                a: "p",
                b: "color",
                c: "red",
                d: "{ color:blue;}"
            },
            correctAnswer: 'c'
    },
    {
        questions: "What is the correct HTML for referring to an external style sheet?",
            answers:{
                a: "<stylesheet>style.css</stylesheet>",
                b: "<link rel='stylesheet' type='text/css' href='style.css'>",
                c: "<link rel='stylesheet' type='text/css' href='style.css'>",
                d: "<a href='style.css'></a>"
            },
            correctAnswer: 'b'
    },
    {
        questions: "What is the correct HTML for referring to an external style sheet?",
            answers:{
                a: "<stylesheet>style.css</stylesheet>",
                b: "<link rel='stylesheet' type='text/css' href='style.css'>",
                c: "<link rel='stylesheet' type='text/css' href='style.css'>",
                d: "<a href='style.css'></a>"
            },
            correctAnswer: 'b'
    },
    {
        questions: "Where in an HTML document is the correct place to refer to an external style sheet?",
            answers:{
                a: "<head> section",
                b: "<body> section",
                c: "<section> section",
                d: "<footer> section"
            },
            correctAnswer: 'b'
    },
    {
        questions: "How do you insert a comment in a CSS file?",
            answers:{
                a: "// this is a css comment",
                b: "<!-- this is a css comment -->",
                c: "// this is a css comment //",
                d: "/* this is a css comment */"
            },
            correctAnswer: 'd'
    },
    {
        questions: "Which HTML tag is used to define an internal style sheet?",
            answers:{
                a: "<script>",
                b: "<css>",
                c: "<style>",
                d: "<link>"
            },
            correctAnswer: 'c'
    },
    {
        questions: "What property is used to change the text color of an element?",
            answers:{
                a: "color:",
                b: "fontcolor:",
                c: "text-color:",
                d: "font-color:"
            },
            correctAnswer: 'a'
    },
    {
        questions: "Which CSS property controls the text size?",
            answers:{
                a: "font-size",
                b: "text-style",
                c: "text-size",
                d: "font-style"
            },
            correctAnswer: 'a'
    },
    {
        questions: "What is the correct CSS syntax for making all the <p> elements bold?",
            answers:{
                a: "a {underline:none;}",
                b: "a {text-decoration:no-underline;}",
                c: "a {decoration:no-underline;}",
                d: "a {text-decoration:none;}"
            },
            correctAnswer: 'd'
    },
    {
        questions: "Some HTML elements have multiple states, like the link, how do you give it a particular style when the user hovers over the element?",
            answers:{
                a: ":onHover",
                b: ":mouseOver",
                c: ":hover",
                d: ":over"
            },
            correctAnswer: 'c'
    },
    {
        questions: "Which property is used to change the font of an element?",
            answers:{
                a: "font-style",
                b: "font-family",
                c: "font-weight",
                d: "font-height"
            },
            correctAnswer: 'b'
    },
    {
        questions: "Which of the following value of cursor shows it as an arrow ?",
            answers:{
                a: "crosshair",
                b: "pointer",
                c: "move",
                d: "default"
            },
            correctAnswer: 'd'
    },
    {
        questions: "How do you select an element with id 'demo'?",
            answers:{
                a: "#demo",
                b: ".demo",
                c: "*demo",
                d: "demo"
            },
            correctAnswer: 'a'
    },
    {
        questions: "What is the default value of the position property?",
            answers:{
                a: "static",
                b: "fixed",
                c: "relative",
                d: "absolute"
            },
            correctAnswer: 'a'
    },
    {
        questions: "How would you only create a border below an HTML element?",
            answers:{
                a: "bottom-border:solid;",
                b: "border-bottom-style:solid;",
                c: "border-bottom-weight:solid;",
                d: "bottom:solid;"
            },
            correctAnswer: 'c'
    },
]

