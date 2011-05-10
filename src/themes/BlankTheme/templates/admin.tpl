<!DOCTYPE html
     PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN"
         "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="{lang}" lang="{lang}" dir="{langdirection}">
{capture assign='additionalhead'}
<link rel="stylesheet" href="{$themepath}/style/admin.css" type="text/css" media="screen,projection" />
{/capture}
{include file='head.tpl'}

<!-- Admin template -->
<body id="bt_{$module}" class="bt_admin">

<!-- skip link navigation -->
<ul id="skiplinks" dir="{langdirection}">
    <li><a class="skip" href="#nav">{gt text='Skip to navigation'} {gt text='(Press Enter)'}.</a></li>
    <li><a class="skip" href="#col1">{gt text='Skip to main content'} {gt text='(Press Enter)'}.</a></li>
</ul>

{* for the backend we do not use a body template *}
<div class="page_margins bt_1">
    <div class="page">

        <!-- begin: #header -->
        <div id="header">
            <div id="topnav">
                {userlinks start='' end='' seperator='<span class="text_separator">|</span>'}
            </div>
            <h1><a href="{$baseurl}" title="{gt text='Go to the homepage'}">{$modvars.ZConfig.sitename}</a></h1>
            <span class="slogan">{$modvars.ZConfig.slogan}</span>
        </div>
        <!-- end: #header -->

        <!-- begin: main navigation #nav -->
        <div id="nav">
            {bt_adminlinks current=$module}
        </div>
        <!-- end: main navigation -->

        <!-- begin: main content area #main -->
        <div id="main">
            <!-- begin: #col1 - main column -->
            <div id="col1">
                <div id="col1_content" class="clearfix">
                    {$maincontent}
                </div>
                <div id="ie_clearing">&nbsp;</div>
                <!-- End: IE Column Clearing -->
            </div>
            <!-- end: #col1 -->
        </div>
        <!-- end: #main -->

        <!-- begin: #footer -->
        <div id="footer">
            <a href="{gt text='http://community.zikula.org/'}" title="{gt text='Powered by Zikula'}">{gt text='Powered by Zikula'}</a>
        </div>
        <!-- end: #footer -->
    </div>
</div>
</body>
</html>
