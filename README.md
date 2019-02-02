# krDailog

JavaScript Drag and Drop dailog jquery plugin

Video Demo:
<iframe width="854" height="480" src="https://www.youtube.com/watch?v=t_7uJO_nFoA" frameborder="0" allowfullscreen></iframe>JO_nFoA)


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
    

# you can use a new version of all and also use min file also

# include file first this way

    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="css/krDailog.css">
    <script type="text/javascript" src="js/jquery.min.js"></script>
    <script type="text/javascript" src="js/jquery-ui.min.js"></script>
    <script type="text/javascript" src="js/bootstrap.min.js"></script>
    <script type="text/javascript" src="js/krDailog.js"></script>

# Basic

 - first, create div and assign an id like
 
    < div id="kBoxDemo" >
        // whatever content to display here and design you subsite.
    < /div >

 - second thing is to implement our method
    <script>
    
        $(document).ready(function(){
        
            $('#kBoxDemo').kBox({
            
                            title: "kartik", // to give the title
                            
                            closeButton: true,
                            
                        });
                        
        });
        
    </script>

 - You may require to click and open any dialog box then use the following.

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
        - this is used to give a title of the panel.

    ## closeButton
        - this is used to display close button that hides or show the panel to click on it.
        - the close button accepts a true or false value.
        - by default it is true.

    ## collapse button
        - this is collapse the panel
        - this is by default true.
        - it is accepted only true or false value.

    ## width
        - this is set a width of a panel
        - this is given in double quotes with px or % etc

    ## height
        - this is set height of a panel
        - this is given in double quotes with px or % etc

    ## show
        - this is set to a panel is visible or not
        - it accepts an only true or false value.

    ## top, left, right and bottom
        - this is set to a position of panel top, left, right and bottom.
        - this is given in double quotes with px or % etc

