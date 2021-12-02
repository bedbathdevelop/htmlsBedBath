-- identifier like 'buenfin_%'         
update cms_block set content = REPLACE(content,'.despues {\r
          display: none !important;', '.despues {\r
          display: block !important;') 
where block_id in (1684, 1687, 1690) and content like '%.despues {\r
          display: none !important;%';
update cms_block set content = REPLACE(content, '.antes {\r
          display: block !important;', '.antes {\r
          display: none !important;')
where block_id in (1684, 1687, 1690) and content like '%.antes {\r
          display: block !important;%';
update cms_block set content = REPLACE(content,'.despues {\r
            display: none !important;', '.despues {\r
            display: block !important;') 
where block_id in (1684, 1687, 1690) and content like '%.despues {\r
            display: none !important;%';
update cms_block set content = REPLACE(content, '.antes {\r
            display: block !important;', '.antes {\r
            display: none !important;')
where block_id in (1684, 1687, 1690) and content like '%.antes {\r
            display: block !important;%';


update cms_block cb  
set content = REPLACE(content,'.wrap-btn{\r
          position: relative;\r
          overflow: hidden;\r
          width: 100%;\r
          height: 50px;\r
        }', '.wrap-btn{\r
          position: relative;\r
          overflow: hidden;\r
          width: 100%;\r
          height: 70px;\r
       }')
where identifier like 'buenfin_%'
and content like '%.wrap-btn{\r
          position: relative;\r
          overflow: hidden;\r
          width: 100%;\r
          height: 50px;\r
        }%';
update cms_block cb  
set content = REPLACE(content,'.wrap-btn p {\r
          right: 10px;\r
          position: absolute;\r
          }', '.wrap-btn p {\r
          right: 10px;\r
          position: absolute;\r
          }\r
          .wrap-btn p:nth-child(1) img{ width: 40px;\r
          }\r
          .wrap-btn p:nth-child(2){\r
              bottom: -10px;\r
              right: 0;\r
          }\r')
where identifier like 'buenfin_%'
and content like '%.wrap-btn p {\r
          right: 10px;\r
          position: absolute;\r
          }%';
update cms_block cb  
set content = REPLACE(content,'alt="" class="img-arrow" /&gt;&lt;/p&gt;', 'alt="" class="img-arrow" /&gt;&lt;/p&gt;&lt;p&gt;regresar&lt;/p&gt;')
--where identifier like 'buenfin_%'
and content like '%alt="" class="img-arrow" /&gt;&lt;/p&gt;%';


/*-------------------------------------------------------*/
update cms_block cb  
set content = REPLACE(content,'&lt;div class="wrap-logo slideDown"&gt;
          &lt;p class="title-bb"&gt;&lt;span&gt;BED BATH &amp; &lt;/span&gt;&lt;span&gt;BEYOND&lt;span class="register"&gt;®&lt;/span&lt;/p&gt;
          &lt;p class="subtitle-bb"&gt;El hogar que &lt;b&gt;tú&lt;/b&gt; eliges&lt;/p&gt;
        &lt;/div&gt;','&lt;div class="wrap-logo slideDown"&gt;
            &lt;img src="https://www.bedbathandbeyond.com.mx/media/wysiwyg/buenfin/logo-horizontal-slogan_1.png?rand=1636480826" alt="Buen Fin"  class="img-bf slideDown"/&gt;
        &lt;/div&gt;')
where content like '%&lt;div class="wrap-logo slideDown"%' and block_id = 1455



update cms_block cb  
set content = REPLACE(content,'@-webkit-keyframes tossing {\r
              0% {\r
                  -webkit-transform: rotate(-4deg);	\r
              }\r
              50% {\r
                  -webkit-transform: rotate(4deg);\r
              }\r
              100% {\r
                  -webkit-transform: rotate(-4deg);	\r
              }\r			
          }', '@-webkit-keyframes tossing {\r
              0% {\r
                  -webkit-transform: rotate(-4deg);	\r
              }\r
              50% {\r
                  -webkit-transform: rotate(4deg);\r
              }\r
              100% {\r
                  -webkit-transform: rotate(-4deg);	\r
              }\r			
          }\r .img-bf {\r 
            width: 30%;\r 
            right: 0;\r 
            margin-left: 70%;\r 
            top: 0;
          }\r')
where content like '%@-webkit-keyframes tossing%' and block_id like '1455'