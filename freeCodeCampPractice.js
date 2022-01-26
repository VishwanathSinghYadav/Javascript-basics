var basicJavascript;

{
    // Comment Your JavaScript Code
    {
        // This is an in-line comment.
        /* This is a
        multi-line comment */
    }

    // Declare JavaScript Variables
    {
        /* 
        JavaScript provides eight different data types 
        undefined, 
        null, 
        boolean, 
        string, 
        symbol, 
        bigint, 
        number,
        object 
        */

        var ourName; //We tell JavaScript to create or declare a variable by putting the keyword var in front of it
    }

    // Storing Values with the Assignment Operator
    {
        var myVar;
        myVar = 5;
    }

    // Assigning the Value of One Variable to Another
    {
        var myVar;
        myVar = 5;
        var myNum;
        myNum = myVar;
    }

    // Initializing Variables with the Assignment Operator
    {
        var myVar = 0;
        var myName = "your name";
    }

    // Understanding Uninitialized Variables
    {
        /*
        When JavaScript variables are declared,
        they have an initial value of undefined.
        If you do a mathematical operation on an undefined variable 
        your result will be NaN which means "Not a Number". 
        If you concatenate a string with an undefined variable,
        you will get a literal string of undefined
        */
    }

    // Understanding Case Sensitivity in Variables
    {
        /*
        MYVAR is not the same as MyVar nor myvar
        Write variable names in JavaScript in camelCase
        */
    }

    // Differences Between the var and let Keywords

    {
        /* 
        So unlike 
        var,
        when you use 
        let,
        a variable with the same name 
        can only be declared once. 
        */
    }

    // Declare a Read-Only Variable with the const Keyword
    {
        /* 
        const 
        is similar to 
        let,
        with the added bonus that 
        variables declared using const are 
        read-only. 
        They are a constant value, 
        which means that once a variable is assigned 
        with const, it cannot be reassigned:
        */
        const FAV_PET = "Cats";
        FAV_PET = "Dogs";

    }

    // Add/Subtract/multiply/divide Two Numbers with JavaScript
    {
        const myVar = 5 + 10;
        const myVar = 12 - 6;
        const myVar = 13 * 13;
        const myVar = 16 / 2;
    }

    // Increment/Decrement a Number with JavaScript
    {
        i++; /*is equivelent*/
        i = i + 1;
        i--; /*is equivelent*/
        i = i - 1;
    }

    // Finding a Remainder in JavaScript
    {
        /*
        17 % 2 = 1 (17 is Odd)
        48 % 2 = 0 (48 is Even)
        */
    }

    // Compound Assignment With 
    // Augmented Addition/substraction/multiplication/division
    {
        let myVar = 1;
        myVar = myVar + 5; /*is equivelent*/
        myVar += 5;
        myVar = myVar - 5; /*is equivelent*/
        myVar -= 5;
        myVar = myVar * 5; /*is equivelent*/
        myVar *= 5;
        myVar = myVar / 5; /*is equivelent*/
        myVar /= 5;
    }

    // Escaping Literal Quotes in Strings
    {
        /* In JavaScript, you can escape a quote 
        from considering it as an end of string 
        quote by placaing a backslash 
        (\) in front of the quote. */
        const myStr = "I am a \"double\" string inside \"double quotes\" ";
    }

    // Quoting Strings with Single Quotes
    {
        const doubleQuoteStr = "This is a string";
        const singleQuoteStr = 'This is also a string';
        //We can use double Quotes with single without using back slash
        const conversation = 'Finn exclaims to Jake, "Algebraic!"';
    }

    // Escape Sequences in Strings
    {
        /* 
        
        Code	Output
        \'	    single quote
        \"	    double quote
        \\	    backslash
        \n	    newline
        \r	    carriage return
        \t	    tab
        \b  	word boundary
        \f	    form feed
        
        */
    }

    // Concatenating Strings with Plus Operator
    {
        const ourStr = "I come first. " + "I come second.";

    }









}