var moment = require('moment');
console.log("Started this...")

const HTMLContent = `<div id="div_landing">
<table align="center" width="100%" cellpadding="0" cellspacing="0" border="0"><!-- courseList -->
    
<tbody id="ctl00_MainContent_myCourseList_courseListView_ctrl0_courseItem" class="Enrolledsrs187096200 courseItem itemEnrolled lastEnrolled"><!-- begin one course -->

<tr>
    <td class="SubjectAreaName_ClassName" id="enrPanelDst-srs187096200-top">
        <p>Computer Science</p>
        <p>32 - Introduction to Computer Science II</p>
    </td>
    <td rowspan="2" class="linkPanelRight" valign="top">
        
        <div>
            <div><a href="https://ccle.ucla.edu/course/view/19W-COMSCI32-1" target="_blank" class="noprint">Class Website<i class="icon-external-link"></i></a></div>
            <a class="courseLink courseGradesLink" href='javascript: courseListAction($(".maincontent")[0].id, "ctl00_MainContent_myCourseList_clCommandFieldTracker", "ctl00_MainContent_myCourseList_clCommandField", "gradespage|187096200!0");'>Grades</a><a class="courseLink classmatesLink" style="border: 0px;" href="https://be.my.ucla.edu/iwe/classmates.aspx?srs=187096200&amp;term=19W">Classmates</a><a class="courseLink notesNeededLink" href="https://be.my.ucla.edu/notesNeeded.aspx" target="_blank">Notes Needed</a>
        </div>
    </td>
</tr>
<tr>
    <td>
        <div class="class_info">
            <a id="ctl00_MainContent_myCourseList_courseListView_ctrl0_textbooksLink" class="courseLink tbLink" href="http://ucla.verbacompare.com/compare?catids=19W187096200" target="_blank">Textbooks<span class="icon-external-link"></span></a>
            
                <div><span style="font-weight: bold; ">Grade Type:</span> <span style="display: inline-block; vertical-align: top;">Mandatory Letter Grade</span></div>
            
            
                <div class="final_exam_info exam_conflict"><span style="font-weight: bold; ">Final Exam:</span> <span style="display: inline-block; vertical-align: top;">Saturday March 16, 2019 11:30am-2:30pm<br>Check back on 03/04/2019 (Monday of 9th week) for final exam location<br></span></div>
            
            
        </div>
    </td>
</tr>

<tr>
    <td colspan="2">
        
                <table class="iweBodyTable coursetable" width="100%">
                    <tbody>
                        <tr id="ctl00_MainContent_myCourseList_courseListView_ctrl0_sectionListView_headerRow">
<th class="centerColumn activeCol noprint" style="width: 6%;"><span class="hide-small">Change</span></th>
<th style="width: 6%;">Sec<span class="hide-small">tion</span></th>
<th style="width: 12%;">Status</th>
<th style="width: 11.5%;">Waitlist Status</th>
<th style="width: 2%;" class="hide-above-small infoCol">Info</th>
<th class="centerColumn" style="width: 4.5%;">Days</th>
<th style="width: 16.5%;">Time</th>
<th class="" style="width: 16.5%;">Loc<span class="hide-small">ation</span></th>
<th class="hide-small centerColumn x" style="width: 5%;">Units</th>
<th class="hide-small" style="width: 20%;">Instr<span class="hide-small">uctor</span></th>
</tr>

                    </tbody>
                    
                <tbody id="ctl00_MainContent_myCourseList_courseListView_ctrl0_sectionListView_ctrl0_thisTBody">
                    <tr id="ctl00_MainContent_myCourseList_courseListView_ctrl0_sectionListView_ctrl0_thisRow">
<td class="centerColumn activeCol noprint">
                            <a href='javascript: $(".mobilemenupanel").toggle().not("#EnrollMenuM0Enrolled1").hide(); void(0);'><i class="icon-pencil"></i></a>
                        </td>
<td nowrap="nowrap" class="section-header">
                            <a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Results/ClassDetail?subj_area_cd=COM+SCI&amp;crs_catlg_no=0032++++&amp;class_no=+001++&amp;class_id=187096200&amp;term_cd=19W" target="_blank" title="Class Detail for 187096200">Lec 1</a>
                        </td>
<td><span class="hide-xsmall">Enrolled</span><span class="hide-above-xsmall">Enrl</span></td>
<td><span class="hide-xsmall">Not Applicable</span><span class="hide-above-xsmall">N/A</span></td>
<td class="hide-above-small infoCol centerColumn"><a class="uit-clickover-bottom" data-content="<div class='info_additional'><div class='grade_type'><div class='popover_section_title info light'><span class='icon-info-sign'></span><span class='addtional_section_data'>Additional Information</span></div><div class='grade_type_content breaktext'><div class=&quot;hide-above-small&quot;><p><span class='grade_type_content_header'>Instructor</span><span class='grade_type_content_text'>Nachenberg, C.S.</span></p><p><span class='grade_type_content_header'>Units</span><span class='grade_type_content_text'>4.0</span></p></div></div></div></div>" data-original-title="" title="" style="cursor: pointer;"><span class="icon-info-sign"></span></a></td>
<td class="centerColumn"> <a class="uit-clickover-bottom" data-content="Monday, Wednesday" data-original-title="" title="" style="cursor: pointer;">MW</a></td>
<td>10am-11:50am</td>
<td class="">Boelter Hall 3400</td>
<td class="hide-small centerColumn">4.0</td>
<td class="hide-small">Nachenberg, C.S.</td>
</tr>

                    <tr id="EnrollMenuM0Enrolled1" class="mobilemenupanel" style="display: none;">
                        <td colspan="10">
                            <div class="message enrl-plan-actions touchpanelmenu"><div class="row"><div class="panel-6"><ul><li class="header">Enrollment Actions</li><li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/Drop/Action?actionParams=drop%2c187096205%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Drop using class ID 187096205">Drop</a></li>
<li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/ExchangeClass/Action?actionParams=xchg_class%2c187096205%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Exchange Class using class ID 187096205">Exchange Class</a></li>
</ul></div></div></div>
                        </td>
                    </tr>
                </tbody>
            
                <tbody id="ctl00_MainContent_myCourseList_courseListView_ctrl0_sectionListView_ctrl1_thisTBody">
                    <tr id="ctl00_MainContent_myCourseList_courseListView_ctrl0_sectionListView_ctrl1_thisRow">
<td class="centerColumn activeCol noprint">
                            <a href='javascript: $(".mobilemenupanel").toggle().not("#EnrollMenuM0Enrolled2").hide(); void(0);'><i class="icon-pencil"></i></a>
                        </td>
<td nowrap="nowrap" class="section-header">
                            <a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Results/ClassDetail?subj_area_cd=COM+SCI&amp;crs_catlg_no=0032++++&amp;class_no=+001++&amp;class_id=187096205&amp;term_cd=19W" target="_blank" title="Class Detail for 187096205">Dis 1E</a>
                        </td>
<td><span class="hide-xsmall">Enrolled</span><span class="hide-above-xsmall">Enrl</span></td>
<td><span class="hide-xsmall">Not Applicable</span><span class="hide-above-xsmall">N/A</span></td>
<td class="hide-above-small infoCol centerColumn"><a class="uit-clickover-bottom" data-content="<div class='info_additional'><div class='grade_type'><div class='popover_section_title info light'><span class='icon-info-sign'></span><span class='addtional_section_data'>Additional Information</span></div><div class='grade_type_content breaktext'><div class=&quot;hide-above-small&quot;><p><span class='grade_type_content_header'>Instructor</span><span class='grade_type_content_text'>Li, Q.</span></p><p><span class='grade_type_content_header'>Units</span><span class='grade_type_content_text'>0.0</span></p></div></div></div></div>" data-original-title="" title="" style="cursor: pointer;"><span class="icon-info-sign"></span></a></td>
<td class="centerColumn"> <a class="uit-clickover-bottom" data-content="Friday" data-original-title="" title="" style="cursor: pointer;">F</a></td>
<td>10am-11:50am</td>
<td class="">Boelter Hall 5280</td>
<td class="hide-small centerColumn">0.0</td>
<td class="hide-small">Li, Q.</td>
</tr>

                    <tr id="EnrollMenuM0Enrolled2" class="mobilemenupanel" style="display: none;">
                        <td colspan="10">
                            <div class="message enrl-plan-actions touchpanelmenu"><div class="row"><div class="panel-6"><ul><li class="header">Enrollment Actions</li><li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/Drop/Action?actionParams=drop%2c187096205%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Drop using class ID 187096205">Drop</a></li>
<li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/ExchangeSection/Action?actionParams=xchg_section%2c187096205%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Exchange Section using class ID 187096205">Exchange Section</a></li>
</ul></div></div></div>
                        </td>
                    </tr>
                </tbody>
            
                </table>
            
        
        <div id="enrPanelDst-srs187096200" class="planEnrolled" data-cid="srs187096200" data-classname="Class 0: COM SCI 32" data-courseset="COM SCI_0032    _ 001  , 001E "></div>
        
    </td>
</tr>
</tbody><!-- end one course -->

<tbody class="course_divider">
<tr><td colspan="2"><div class="section_break"></div></td></tr>
</tbody>

<tbody id="ctl00_MainContent_myCourseList_courseListView_ctrl2_courseItem" class="Enrolledsrs262211220 courseItem itemEnrolled lastEnrolled"><!-- begin one course -->

<tr>
    <td class="SubjectAreaName_ClassName" id="enrPanelDst-srs262211220-top">
        <p>Mathematics</p>
        <p>32B - Calculus of Several Variables</p>
    </td>
    <td rowspan="2" class="linkPanelRight" valign="top">
        
        <div>
            <div><a href="https://ccle.ucla.edu/course/view/19W-MATH32B-3" target="_blank" class="noprint">Class Website<i class="icon-external-link"></i></a></div>
            <a class="courseLink courseGradesLink" href='javascript: courseListAction($(".maincontent")[0].id, "ctl00_MainContent_myCourseList_clCommandFieldTracker", "ctl00_MainContent_myCourseList_clCommandField", "gradespage|262211220!0");'>Grades</a><a class="courseLink classmatesLink" style="border: 0px;" href="https://be.my.ucla.edu/iwe/classmates.aspx?srs=262211220&amp;term=19W">Classmates</a>
        </div>
    </td>
</tr>
<tr>
    <td>
        <div class="class_info">
            <a id="ctl00_MainContent_myCourseList_courseListView_ctrl2_textbooksLink" class="courseLink tbLink" href="http://ucla.verbacompare.com/compare?catids=19W262211220" target="_blank">Textbooks<span class="icon-external-link"></span></a><a id="ctl00_MainContent_myCourseList_courseListView_ctrl2_libraryLink" class="courseLink nowrap" href="javascript: toggleVis('ctl00_MainContent_myCourseList_courseListView_ctrl2_libraryData');">Library&nbsp;Reserves</a><div id="ctl00_MainContent_myCourseList_courseListView_ctrl2_libraryData" class="contentColor" style="display: none;"><b>Library Reserves:</b><br>&nbsp;<a href="http://catalog.library.ucla.edu/vwebv/search?browseFlag=N&amp;instructorId=7843%7CHarrop-Griffiths%2C%20&amp;departmentId=99%7CMATH%3A%20Mathematics&amp;courseId=4791%7CMATH%3A%20032B%20Calculus%20of%20Several%20Variables&amp;searchType=5" target="_blank" class="blue">MATH 032B - HARROP-GRIFFITHS / LIU</a></div>
            
                <div><span style="font-weight: bold; ">Grade Type:</span> <span style="display: inline-block; vertical-align: top;">Letter Grade</span></div>
            
            
                <div class="final_exam_info exam_conflict"><span style="font-weight: bold; ">Final Exam:</span> <span style="display: inline-block; vertical-align: top;">Sunday March 17, 2019 11:30am-2:30pm<br>Check back on 03/04/2019 (Monday of 9th week) for final exam location<br></span></div>
            
            
        </div>
    </td>
</tr>

<tr>
    <td colspan="2">
        
                <table class="iweBodyTable coursetable" width="100%">
                    <tbody>
                        <tr id="ctl00_MainContent_myCourseList_courseListView_ctrl2_sectionListView_headerRow">
<th class="centerColumn activeCol noprint" style="width: 6%;"><span class="hide-small">Change</span></th>
<th style="width: 6%;">Sec<span class="hide-small">tion</span></th>
<th style="width: 12%;">Status</th>
<th style="width: 11.5%;">Waitlist Status</th>
<th style="width: 2%;" class="hide-above-small infoCol">Info</th>
<th class="centerColumn" style="width: 4.5%;">Days</th>
<th style="width: 16.5%;">Time</th>
<th class="" style="width: 16.5%;">Loc<span class="hide-small">ation</span></th>
<th class="hide-small centerColumn x" style="width: 5%;">Units</th>
<th class="hide-small" style="width: 20%;">Instr<span class="hide-small">uctor</span></th>
</tr>

                    </tbody>
                    
                <tbody id="ctl00_MainContent_myCourseList_courseListView_ctrl2_sectionListView_ctrl0_thisTBody">
                    <tr id="ctl00_MainContent_myCourseList_courseListView_ctrl2_sectionListView_ctrl0_thisRow">
<td class="centerColumn activeCol noprint">
                            <a href='javascript: $(".mobilemenupanel").toggle().not("#EnrollMenuM0Enrolled3").hide(); void(0);'><i class="icon-pencil"></i></a>
                        </td>
<td nowrap="nowrap" class="section-header">
                            <a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Results/ClassDetail?subj_area_cd=MATH+++&amp;crs_catlg_no=0032B+++&amp;class_no=+003++&amp;class_id=262211220&amp;term_cd=19W" target="_blank" title="Class Detail for 262211220">Lec 3</a>
                        </td>
<td><span class="hide-xsmall">Enrolled</span><span class="hide-above-xsmall">Enrl</span></td>
<td><span class="hide-xsmall">Not Applicable</span><span class="hide-above-xsmall">N/A</span></td>
<td class="hide-above-small infoCol centerColumn"><a class="uit-clickover-bottom" data-content="<div class='info_additional'><div class='grade_type'><div class='popover_section_title info light'><span class='icon-info-sign'></span><span class='addtional_section_data'>Additional Information</span></div><div class='grade_type_content breaktext'><div class=&quot;hide-above-small&quot;><p><span class='grade_type_content_header'>Instructor</span><span class='grade_type_content_text'>Harrop-Griffiths,</span></p><p><span class='grade_type_content_header'>Units</span><span class='grade_type_content_text'>4.0</span></p></div></div></div></div>" data-original-title="" title="" style="cursor: pointer;"><span class="icon-info-sign"></span></a></td>
<td class="centerColumn"> <a class="uit-clickover-bottom" data-content="Monday, Wednesday, Friday" data-original-title="" title="" style="cursor: pointer;">MWF</a></td>
<td>12pm-12:50pm</td>
<td class="">Mathematical Sciences 4000A</td>
<td class="hide-small centerColumn">4.0</td>
<td class="hide-small">Harrop-Griffiths,</td>
</tr>

                    <tr id="EnrollMenuM0Enrolled3" class="mobilemenupanel" style="display: none;">
                        <td colspan="10">
                            <div class="message enrl-plan-actions touchpanelmenu"><div class="row"><div class="panel-6"><ul><li class="header">Enrollment Actions</li><li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/Drop/Action?actionParams=drop%2c262211226%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Drop using class ID 262211226">Drop</a></li>
<li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/ExchangeClass/Action?actionParams=xchg_class%2c262211226%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Exchange Class using class ID 262211226">Exchange Class</a></li>
<li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/ChangeGradeType/Action?actionParams=chg_grdtype%2c262211220%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Change Grade Type using class ID 262211220">Change Grade Type</a></li>
</ul></div></div></div>
                        </td>
                    </tr>
                </tbody>
            
                <tbody id="ctl00_MainContent_myCourseList_courseListView_ctrl2_sectionListView_ctrl1_thisTBody">
                    <tr id="ctl00_MainContent_myCourseList_courseListView_ctrl2_sectionListView_ctrl1_thisRow">
<td class="centerColumn activeCol noprint">
                            <a href='javascript: $(".mobilemenupanel").toggle().not("#EnrollMenuM0Enrolled4").hide(); void(0);'><i class="icon-pencil"></i></a>
                        </td>
<td nowrap="nowrap" class="section-header">
                            <a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Results/ClassDetail?subj_area_cd=MATH+++&amp;crs_catlg_no=0032B+++&amp;class_no=+003++&amp;class_id=262211226&amp;term_cd=19W" target="_blank" title="Class Detail for 262211226">Dis 3F</a>
                        </td>
<td><span class="hide-xsmall">Enrolled</span><span class="hide-above-xsmall">Enrl</span></td>
<td><span class="hide-xsmall">Not Applicable</span><span class="hide-above-xsmall">N/A</span></td>
<td class="hide-above-small infoCol centerColumn"><a class="uit-clickover-bottom" data-content="<div class='info_additional'><div class='grade_type'><div class='popover_section_title info light'><span class='icon-info-sign'></span><span class='addtional_section_data'>Additional Information</span></div><div class='grade_type_content breaktext'><div class=&quot;hide-above-small&quot;><p><span class='grade_type_content_header'>Instructor</span><span class='grade_type_content_text'>Vu, F.D.</span></p><p><span class='grade_type_content_header'>Units</span><span class='grade_type_content_text'>0.0</span></p></div></div></div></div>" data-original-title="" title="" style="cursor: pointer;"><span class="icon-info-sign"></span></a></td>
<td class="centerColumn"> <a class="uit-clickover-bottom" data-content="Thursday" data-original-title="" title="" style="cursor: pointer;">R</a></td>
<td>12pm-12:50pm</td>
<td class="">Boelter Hall 9436</td>
<td class="hide-small centerColumn">0.0</td>
<td class="hide-small">Vu, F.D.</td>
</tr>

                    <tr id="EnrollMenuM0Enrolled4" class="mobilemenupanel" style="display: none;">
                        <td colspan="10">
                            <div class="message enrl-plan-actions touchpanelmenu"><div class="row"><div class="panel-6"><ul><li class="header">Enrollment Actions</li><li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/Drop/Action?actionParams=drop%2c262211226%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Drop using class ID 262211226">Drop</a></li>
<li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/ExchangeSection/Action?actionParams=xchg_section%2c262211226%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Exchange Section using class ID 262211226">Exchange Section</a></li>
<li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/ChangeGradeType/Action?actionParams=chg_grdtype%2c262211220%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Change Grade Type using class ID 262211220">Change Grade Type</a></li>
</ul></div></div></div>
                        </td>
                    </tr>
                </tbody>
            
                </table>
            
        
        <div id="enrPanelDst-srs262211220" class="planEnrolled" data-cid="srs262211220" data-classname="Class 0: MATH 32B" data-courseset="MATH   _0032B   _ 003  , 003F "></div>
        
    </td>
</tr>
</tbody><!-- end one course -->

<!-- end one course -->

<tbody class="course_divider">
<tr><td colspan="2"><div class="section_break"></div></td></tr>
</tbody>

<tbody id="ctl00_MainContent_myCourseList_courseListView_ctrl6_courseItem" class="Enrolledsrs318001220 courseItem itemEnrolled lastEnrolled"><!-- begin one course -->

<tr>
    <td class="SubjectAreaName_ClassName" id="enrPanelDst-srs318001220-top">
        <p>Physics</p>
        <p>1A - Physics for Scientists and Engineers: Mechanics</p>
    </td>
    <td rowspan="2" class="linkPanelRight" valign="top">
        
        <div>
            <div><a href="https://ccle.ucla.edu/course/view/19W-PHYSICS1A-3" target="_blank" class="noprint">Class Website<i class="icon-external-link"></i></a></div>
            <a class="courseLink courseGradesLink" href='javascript: courseListAction($(".maincontent")[0].id, "ctl00_MainContent_myCourseList_clCommandFieldTracker", "ctl00_MainContent_myCourseList_clCommandField", "gradespage|318001220!0");'>Grades</a><a class="courseLink classmatesLink" style="border: 0px;" href="https://be.my.ucla.edu/iwe/classmates.aspx?srs=318001220&amp;term=19W">Classmates</a>
        </div>
    </td>
</tr>
<tr>
    <td>
        <div class="class_info">
            <a id="ctl00_MainContent_myCourseList_courseListView_ctrl6_textbooksLink" class="courseLink tbLink" href="http://ucla.verbacompare.com/compare?catids=19W318001220" target="_blank">Textbooks<span class="icon-external-link"></span></a>
            
                <div><span style="font-weight: bold; ">Grade Type:</span> <span style="display: inline-block; vertical-align: top;">Letter Grade</span></div>
            
            
                <div class="final_exam_info exam_conflict"><span style="font-weight: bold; ">Final Exam:</span> <span style="display: inline-block; vertical-align: top;">Saturday March 16, 2019 3pm-6pm<br>Check back on 03/04/2019 (Monday of 9th week) for final exam location<br></span></div>
            
            
        </div>
    </td>
</tr>

<tr>
    <td colspan="2">
        
                <table class="iweBodyTable coursetable" width="100%">
                    <tbody>
                        <tr id="ctl00_MainContent_myCourseList_courseListView_ctrl6_sectionListView_headerRow">
<th class="centerColumn activeCol noprint" style="width: 6%;"><span class="hide-small">Change</span></th>
<th style="width: 6%;">Sec<span class="hide-small">tion</span></th>
<th style="width: 12%;">Status</th>
<th style="width: 11.5%;">Waitlist Status</th>
<th style="width: 2%;" class="hide-above-small infoCol">Info</th>
<th class="centerColumn" style="width: 4.5%;">Days</th>
<th style="width: 16.5%;">Time</th>
<th class="" style="width: 16.5%;">Loc<span class="hide-small">ation</span></th>
<th class="hide-small centerColumn x" style="width: 5%;">Units</th>
<th class="hide-small" style="width: 20%;">Instr<span class="hide-small">uctor</span></th>
</tr>

                    </tbody>
                    
                <tbody id="ctl00_MainContent_myCourseList_courseListView_ctrl6_sectionListView_ctrl0_thisTBody">
                    <tr id="ctl00_MainContent_myCourseList_courseListView_ctrl6_sectionListView_ctrl0_thisRow">
<td class="centerColumn activeCol noprint">
                            <a href='javascript: $(".mobilemenupanel").toggle().not("#EnrollMenuM0Enrolled7").hide(); void(0);'><i class="icon-pencil"></i></a>
                        </td>
<td nowrap="nowrap" class="section-header">
                            <a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Results/ClassDetail?subj_area_cd=PHYSICS&amp;crs_catlg_no=0001A+++&amp;class_no=+003++&amp;class_id=318001220&amp;term_cd=19W" target="_blank" title="Class Detail for 318001220">Lec 3</a>
                        </td>
<td><span class="hide-xsmall">Enrolled</span><span class="hide-above-xsmall">Enrl</span></td>
<td><span class="hide-xsmall">Not Applicable</span><span class="hide-above-xsmall">N/A</span></td>
<td class="hide-above-small infoCol centerColumn"><a class="uit-clickover-bottom" data-content="<div class='info_additional'><div class='grade_type'><div class='popover_section_title info light'><span class='icon-info-sign'></span><span class='addtional_section_data'>Additional Information</span></div><div class='grade_type_content breaktext'><div class=&quot;hide-above-small&quot;><p><span class='grade_type_content_header'>Instructor</span><span class='grade_type_content_text'>Kusenko, A.</span></p><p><span class='grade_type_content_header'>Units</span><span class='grade_type_content_text'>5.0</span></p></div></div></div></div>" data-original-title="" title="" style="cursor: pointer;"><span class="icon-info-sign"></span></a></td>
<td class="centerColumn"> <a class="uit-clickover-bottom" data-content="Tuesday, Thursday" data-original-title="" title="" style="cursor: pointer;">TR</a></td>
<td>10am-11:50am</td>
<td class="">Physics and Astronomy Building 1425</td>
<td class="hide-small centerColumn">5.0</td>
<td class="hide-small">Kusenko, A.</td>
</tr>

                    <tr id="EnrollMenuM0Enrolled7" class="mobilemenupanel" style="display: none;">
                        <td colspan="10">
                            <div class="message enrl-plan-actions touchpanelmenu"><div class="row"><div class="panel-6"><ul><li class="header">Enrollment Actions</li><li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/Drop/Action?actionParams=drop%2c318001221%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Drop using class ID 318001221">Drop</a></li>
<li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/ExchangeClass/Action?actionParams=xchg_class%2c318001221%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Exchange Class using class ID 318001221">Exchange Class</a></li>
<li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/ChangeGradeType/Action?actionParams=chg_grdtype%2c318001220%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Change Grade Type using class ID 318001220">Change Grade Type</a></li>
</ul></div></div></div>
                        </td>
                    </tr>
                </tbody>
            
                <tbody id="ctl00_MainContent_myCourseList_courseListView_ctrl6_sectionListView_ctrl1_thisTBody">
                    <tr id="ctl00_MainContent_myCourseList_courseListView_ctrl6_sectionListView_ctrl1_thisRow">
<td class="centerColumn activeCol noprint">
                            <a href='javascript: $(".mobilemenupanel").toggle().not("#EnrollMenuM0Enrolled8").hide(); void(0);'><i class="icon-pencil"></i></a>
                        </td>
<td nowrap="nowrap" class="section-header">
                            <a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Results/ClassDetail?subj_area_cd=PHYSICS&amp;crs_catlg_no=0001A+++&amp;class_no=+003++&amp;class_id=318001221&amp;term_cd=19W" target="_blank" title="Class Detail for 318001221">Dis 3A</a>
                        </td>
<td><span class="hide-xsmall">Enrolled</span><span class="hide-above-xsmall">Enrl</span></td>
<td><span class="hide-xsmall">Not Applicable</span><span class="hide-above-xsmall">N/A</span></td>
<td class="hide-above-small infoCol centerColumn"><a class="uit-clickover-bottom" data-content="<div class='info_additional'><div class='grade_type'><div class='popover_section_title info light'><span class='icon-info-sign'></span><span class='addtional_section_data'>Additional Information</span></div><div class='grade_type_content breaktext'><div class=&quot;hide-above-small&quot;><p><span class='grade_type_content_header'>Instructor</span><span class='grade_type_content_text'>Little, J.G.</span></p><p><span class='grade_type_content_header'>Units</span><span class='grade_type_content_text'>0.0</span></p></div></div></div></div>" data-original-title="" title="" style="cursor: pointer;"><span class="icon-info-sign"></span></a></td>
<td class="centerColumn"> <a class="uit-clickover-bottom" data-content="Friday" data-original-title="" title="" style="cursor: pointer;">F</a></td>
<td>1pm-1:50pm</td>
<td class="">Physics and Astronomy Building 2434</td>
<td class="hide-small centerColumn">0.0</td>
<td class="hide-small">Little, J.G.</td>
</tr>

                    <tr id="EnrollMenuM0Enrolled8" class="mobilemenupanel" style="display: none;">
                        <td colspan="10">
                            <div class="message enrl-plan-actions touchpanelmenu"><div class="row"><div class="panel-6"><ul><li class="header">Enrollment Actions</li><li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/Drop/Action?actionParams=drop%2c318001221%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Drop using class ID 318001221">Drop</a></li>
<li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/ExchangeSection/Action?actionParams=xchg_section%2c318001221%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Exchange Section using class ID 318001221">Exchange Section</a></li>
<li class="menuitem"><a role="menuitem" tabindex="-1" href="https://sa.ucla.edu/ro/ClassSearch/Enrollment/ChangeGradeType/Action?actionParams=chg_grdtype%2c318001220%2c19W%2chttps%3a%2f%2fbe.my.ucla.edu%2fstudylist.aspx" title="Change Grade Type using class ID 318001220">Change Grade Type</a></li>
</ul></div></div></div>
                        </td>
                    </tr>
                </tbody>
            
                </table>
            
        
        <div id="enrPanelDst-srs318001220" class="planEnrolled" data-cid="srs318001220" data-classname="Class 0: PHYSICS 1A" data-courseset="PHYSICS_0001A   _ 003  , 003A "></div>
        
    </td>
</tr>
</tbody><!-- end one course -->

<!-- /courseList --></table>
</div>`




// Extracting the course name
var courseInfo = []

//For the course title
var courseTitleS = new RegExp('<p>[^<]', 'g');
var courseTitleE = new RegExp('[^>]<\/p>', 'g');

var regexObjS = courseTitleS.exec(HTMLContent);
var regexObjE = courseTitleE.exec(HTMLContent);
var regexDesS = courseTitleS.exec(HTMLContent);
var regexDesE = courseTitleE.exec(HTMLContent);

//course location
var locationE = new RegExp('<td class="">.*<\/td>', 'g')
var regexObjLec = locationE.exec(HTMLContent);
var regexObjDis = locationE.exec(HTMLContent);

//lecture days
var lecDays = new RegExp('<td class="centerColumn">[^\/]*\/', 'g')
var regexLDays = lecDays.exec(HTMLContent);
var partialDays = "";
var parDays = new RegExp('<');
var regexLFD = "";
var parDays2 = new RegExp('>');
var regexLFD2 = "";

// discussion days
var regexDDays = lecDays.exec(HTMLContent);
var partialDDays = "";
var regexDFD = "";
var regexDFD2 = "";

//lecture time
var lecTime = new RegExp("[0123456789:]{1,5}[pam]{2}-[0123456789:]{1,5}[pam]{2}", 'g')
var regexfinalTime = lecTime.exec(HTMLContent);
var regexlecTime = lecTime.exec(HTMLContent);
var regexdisTime = lecTime.exec(HTMLContent);

// schedule will have alternating course name and description
while (regexObjE !== null && regexObjS !== null && regexDesE !== null && regexDesS !== null) {

    // Preprocessing
    partialDays = (HTMLContent.substr(regexLDays.index + regexLDays[0].length - 13, 20));
    regexLFD = parDays.exec(partialDays);
    regexLFD2 = parDays2.exec(partialDays);
    partialDDays = (HTMLContent.substr(regexDDays.index + regexDDays[0].length - 13, 20));
    regexDFD = parDays.exec(partialDDays);
    regexDFD2 = parDays2.exec(partialDDays);

    //Constructing the object
    courseInfo.push({
        "title": HTMLContent.substr(regexObjS.index + 3, regexObjE.index - regexObjS.index - 2) + " " +
            HTMLContent.substr(regexDesS.index + 3, regexDesE.index - regexDesS.index - 2),
        "locationLec": HTMLContent.substr(regexObjLec.index + 13, regexObjLec[0].length - 18),
        "locationDis": HTMLContent.substr(regexObjDis.index + 13, regexObjDis[0].length - 18),
        "LecDays": partialDays.substr(0, regexLFD.index).substr(regexLFD2.index + 1, 10),
        "DisDays": partialDDays.substr(0, regexDFD.index).substr(regexDFD2.index + 1, 10),
        "LecTime": regexlecTime[0],
        "DisTime": regexdisTime[0],
        "FinalTime" : regexfinalTime[0],
    });



    regexObjS = courseTitleS.exec(HTMLContent);
    regexObjE = courseTitleE.exec(HTMLContent);
    regexDesS = courseTitleS.exec(HTMLContent);
    regexDesE = courseTitleE.exec(HTMLContent);
    regexObjLec = locationE.exec(HTMLContent);
    regexObjDis = locationE.exec(HTMLContent);

    regexLDays = lecDays.exec(HTMLContent);
    regexDDays = lecDays.exec(HTMLContent);

    regexfinalTime = lecTime.exec(HTMLContent);
    regexlecTime = lecTime.exec(HTMLContent);
    regexdisTime = lecTime.exec(HTMLContent);
}


courseInfo = courseInfo.map((e) => {
    var titleDash = new RegExp('-');
    var regexObjDash = titleDash.exec(e.title);

    var regexLT = titleDash.exec(e.LecTime);
    var regexDT = titleDash.exec(e.DisTime);

    return {
        title: e.title.substr(0, regexObjDash.index - 1),
        locationLec: e.locationLec,
        locationDis: e.locationDis,
        LecDays: e.LecDays,
        DisDays: e.DisDays,
        LecTimeS: e.LecTime.substr(0, regexLT.index),
        LecTimeL: e.LecTime.substr(regexLT.index + 1, 10),
        DisTimeS: e.DisTime.substr(0, regexDT.index),
        DisTimeL: e.DisTime.substr(regexDT.index + 1, 10),
        //FinalTime : e.FinalTime,
    };
})



console.log(courseInfo)

console.log();


var addEvents = [];
var week1Monday = new Date('January 01, 2000');
//console.log(week1Monday);


week1Monday.setDate(week1Monday.getDate() + 1);
week1Monday.setTime(courseInfo[0].LecTimeL)
console.log(week1Monday);


// courseInfo.forEach((e) => {
//     var d = new Date(week1Monday);

//     addEvents.push({
//         title: e.title + " Final",
//         location: "",
//         time: d.setDate(week1Monday.getDate() + )
//     })
// })