var efa_default=75;var efa_increment=10;var efalang_zoomIn="Decrease font size";var efalang_zoomReset="Reset font size";var efalang_zoomOut="Increase font size";var efathemedir="blanktheme";function Efa_Fontsize(a,b){this.w3c=(document.getElementById);this.ms=(document.all);this.userAgent=navigator.userAgent.toLowerCase();this.isOldOp=((this.userAgent.indexOf("opera")!=-1)&&(parseFloat(this.userAgent.substr(this.userAgent.indexOf("opera")+5))<=7));this.isMacIE=((this.userAgent.indexOf("msie")!=-1)&&(this.userAgent.indexOf("mac")!=-1)&&(this.userAgent.indexOf("opera")==-1));if((this.w3c||this.ms)&&!this.isOldOp&&!this.isMacIE){this.increment=a;this.def=b;this.defPx=Math.round(16*(b/100));this.base=1;this.pref=b}else{this.efaInit=new Function("return true;")}}efaInitValues=function(b){if((b.w3c||b.ms)&&!b.isOldOp&&!b.isMacIE){var d=['<span class="font-large">','<img src="'+document.location.pnbaseURL+"themes/"+efathemedir+'/images/pixel-trans.gif" width="16" height="16" alt="[+]" title="'+efalang_zoomIn+'" />',efalang_zoomIn,"","","","","","","","</span> "];var c=['<span class="font-reset">','<img src="'+document.location.pnbaseURL+"themes/"+efathemedir+'/images/pixel-trans.gif" width="16" height="16" alt="[R]" title="'+efalang_zoomReset+'" />',efalang_zoomReset,"","","","","","","","</span> "];var a=['<span class="font-small">','<img src="'+document.location.pnbaseURL+"themes/"+efathemedir+'/images/pixel-trans.gif" width="16" height="16" alt="[-]" title="'+efalang_zoomOut+'" />',efalang_zoomOut,"","","","","","","","</span>"];b.biggerLink=b.getLinkHtml(1,d);b.resetLink=b.getLinkHtml(0,c);b.smallerLink=b.getLinkHtml(-1,a)}else{b.biggerLink="";b.resetLink="";b.smallerLink=""}b.allLinks=b.biggerLink+b.resetLink+b.smallerLink};Efa_Fontsize.prototype.efaInit=function(){efaInitValues(this);this.body=(this.w3c)?document.getElementsByTagName("body")[0].style:document.all.tags("body")[0].style;this.efaTest=(this.w3c)?document.getElementById("topnav"):document.all.topnav;var a=(this.efaTest.clientHeight)?parseInt(this.efaTest.clientHeight):(this.efaTest.offsetHeight)?parseInt(this.efaTest.offsetHeight):999;if(a<this.defPx){this.base=this.defPx/a}this.body.fontSize=Math.round(this.pref*this.base)+"%"};Efa_Fontsize.prototype.getLinkHtml=function(c,b){var a=b[0]+'<a href="#" onclick="efa_fontSize.setSize('+c+'); return false;"';a+=(b[2])?'title="'+b[2]+'"':"";a+=(b[3])?'class="'+b[3]+'"':"";a+=(b[4])?'id="'+b[4]+'"':"";a+=(b[5])?'name="'+b[5]+'"':"";a+=(b[6])?'accesskey="'+b[6]+'"':"";a+=(b[7])?'onmouseover="'+b[7]+'"':"";a+=(b[8])?'onmouseout="'+b[8]+'"':"";a+=(b[9])?'onfocus="'+b[9]+'"':"";return a+=">"+b[1]+"</a>"+b[10]};Efa_Fontsize.prototype.setSize=function(a){this.pref=(a)?this.pref+(a*this.increment):this.def;this.body.fontSize=Math.round(this.pref*this.base)+"%"};var efa_fontSize=new Efa_Fontsize(efa_increment,efa_default);