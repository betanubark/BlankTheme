<?php
/**
 * Zikula Application Framework
 *
 * @copyright  (c) 2008, BlankTheme Team
 * @link       http://www.blanktheme.org
 * @license    GNU/GPL - http://www.gnu.org/copyleft/gpl.html
 * @version    $Id$
 */

/**
 * Smarty function to centralize important html outputs
 *
 * Example
 * <!--[bt_htmloutput section="head"]-->
 *
 * @author       Mateo Tibaquira
 * @since        05/07/08
 * @param        array       $params      All attributes passed to this function from the template
 * @param        object      &$smarty     Reference to the Smarty object
 * @param        string      $section     Output section to return
 * @return       string      the results of the module function
 */
function smarty_function_bt_htmloutput($params, &$smarty)
{
    // variables to use
    // params
    $section = $params['section'];
    unset($params);
    // theme vars
    $template  = $smarty->_tpl_vars['template'];
    $layout    = $smarty->_tpl_vars['layout'];
    $usefontr  = $smarty->_tpl_vars['usefontresize'];
    // check for the current section
    $current   = (isset($smarty->_tpl_vars['current'])) ? $smarty->_tpl_vars['current'] : '';
    // assign the respective output
    $output  = '';
    switch($section)
    {
        case 'fontresize':
            if ($usefontr == 'y') {
            // font resize based in the efa script
            PageUtil::addVar('javascript', $smarty->themepath.'/javascript/efa/efa_fontsize.js');
            $output = '<script type="text/javascript">'."\n"
                     .'  // <![CDATA['."\n"
                     .'  if (efa_fontSize) {'."\n"
                     .'    var efalang_zoomIn = \''.pnML('_AB_FONT_ZOOMIN')."';\n"
                     .'    var efalang_zoomReset = \''.pnML('_AB_FONT_ZOOMRESET')."';\n"
                     .'    var efalang_zoomOut = \''.pnML('_AB_FONT_ZOOMOUT')."';\n"
                     .'    var efathemedir = \''.$smarty->directory."';\n"
                     .'    efa_fontSize.efaInit();'."\n"
                     .'    document.write(efa_fontSize.allLinks);'."\n"
                     .'  }'."\n"
                     .'  // ]]>'."\n"
                     .'</script>';
            }
            break;

        case 'head':
            // head stylesheets
            $output = '<link rel="stylesheet" href="'.$smarty->stylepath.'/layout_'.$template.'.css" type="text/css"/>'."\n"
                     .'<!--[if lte IE 7]>'."\n"
//                     .'<link rel="stylesheet" href="'.$smarty->stylepath.'/patches/patch_'.$template.'.css" type="text/css" />'."\n"
                     .'<link rel="stylesheet" href="'.$smarty->themepath.'/yaml/core/slim_iehacks.css" type="text/css" />'."\n"
                     .'<![endif]-->'."\n"
                     .'<!--[if lte IE 6]>'."\n"
                     .'<script type="text/javascript" src="'.$smarty->scriptpath.'/minmax.js"></script>'."\n"
                     .'<![endif]-->'."\n";
            break;

        case 'classesbody':
            // add the classes with a 'bt_' prefix
            if (!empty($current)) {
                $output .= 'bt_'.$current.' ';
            }
            $output .= 'bt_'.$template;
            break;

        case 'classespage':
            // add the classes with a 'bt_' prefix
            $output = 'bt_'.str_replace('_', ' bt_', $layout);
            break;
    }

    return $output;
}
