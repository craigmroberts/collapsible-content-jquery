jQuery-Collapsible-Content
==========================

 
The script has these features.
 
-          Singular collapsible elements.
-          Group collapsible elements.
-          Ability to turn on the no js auto show collapsible elements contents or not.
-          Multiple groups on one page.
 
 
The collapsible contents HTML would look like.
 
Singular ! - This won’t show the conents without js. (Remove the hide if you want too)
 
<ul class="collapse">
        <label>Filter items</label>
        <li class='hide'>
                     Hidden content
        </li>
</ul>      
 
Group
 
<div class="group">
 
<ul class="collapse">
        <label>Filter 1</label>
        <li class='hide'>
                     Hidden content
        </li>
</ul>      
 
 
<div class="collapse">
        <label>Filter 2</label>
        <div class='hide'>
                     Hidden content
        </div>
</div>      
 
</div>  
 
 
 
To use the script, include the functions script (which is most of this script that would be in a separate file). Then call the function by adding;
 
CMR_Collapse.setPage(1);
‘The 1 here signifies that you want the collapsible contents to be visible when the user isn’t using js. This is optional.
