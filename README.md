# krDailog
JavaScript Drag and Drop dailog jquery plugin


/*
    krDailog Version 1.0
    Author: krButani
    email: butanikartik1108@gmail.com
*/


Require to use this function
    - bootstrap.css new version
    - bootstrap.js new version
    - jquery.js new version
    - jquery-ui.js new version
    - glyphicons font by bootstrap

# you can use new version of all and also use min file also

# include file first this way

    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/krDailog.css">
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/krDailog.js"></script>

# Basic

 - first create div and assign a id lik
    <div id="kBoxDemo">
        // what ever content to display here and design you sub site.
    </div>

 - second thing is to implement our method
    <script>
        $(document).ready(function(){
            $('#kBoxDemo').kBox({
                            title: "kartik", // to give the title
                            closeButton: true,
                        });
        });
    </script>

 - You may require to click and open any dialog box than use following.

     <input type="button" name="kbtn" id="kbtn" value="Open Model 1" />
     <script>
         $(document).ready(function(){
                    $('#kBoxDemo').kBox({
                                    title: "kartik", // to give the title
                                    closeButton: true,
                                    show: false,
                    });

                    $('#kbtn').click(function(){
                        $('#kBoxDemo').kBox({open:true}); / / this is also use to close the pannel and re open it.
                    });
         });
     </script>

# attributes

    ## title
        - this is use to give a title of the pannel.

    ## closeButton
        - this is use to display close button that hide or show the pannel to click on it.
        - the close button accept true or false value.
        - by default it is true.

    ## collapseButton
        - this is collapse the pannel
        - this is by default true.
        - it is accept only ture or false value.

    ## width
        - this is set width of pannel
        - this is give in double quotes with px or % etc

    ## height
        - this is set height of pannel
        - this is give in double quotes with px or % etc

    ## show
        - this is set to pannel is visible or not
        - it accept only true or false value.

    ## top, left, right and bottom
        - this is set to possion of pannel top, left, right and bottom.
        - this is give in double quotes with px or % etc
