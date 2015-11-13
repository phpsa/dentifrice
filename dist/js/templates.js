/*!
 * This Source Code Form is subject to the terms of the
 * Mozilla Public License, v. 2.0. If a copy of the MPL was not distributed
 * with this file, You can obtain one at http://mozilla.org/MPL/2.0/.
 */
var templates = {"layoutToolbar":"    <div id=\"dtf-toolbar\">      <button id=\"getList\"><span class=\"fa-stack\"><i class=\"fa fa-list-ul fa-stack-2x\"></i></span></button>      <div id=\"containerListDraft\">        <div id=\"closeListDraft\"> &#xD7;</div>        <h3 class=\"titleContainerListDraft\" data-i18n=\"toolbar.drafts_list\"></h3>        <ul id=\"listDraft\"></ul>      </div>      <button id=\"dtf-layout-mode\" data-i18n=\"[title]toolbar.layout_mode_help;toolbar.layout_mode\"></button>      <button id=\"undoBtn\" class=\"first-hidden\" data-i18n=\"[title]toolbar.cancel\"></button>      <button id=\"dtf-content-mode\" class=\"first-hidden\" data-i18n=\"[title]toolbar.content_mode_help;toolbar.content_mode\"></button>      <button id=\"validateBtn\" class=\"btn-green\" data-i18n=\"toolbar.validate\"></button>      <button id=\"resumeBtn\" class=\"btn-green\" data-i18n=\"toolbar.resume\"></button>      <button id=\"saveDraft\" class=\"btn-orange\" data-i18n=\"toolbar.save_draft\"></button>    </div>  ","layoutMessages":"    <div id=\"messages\"></div>  ","blockAddBar":"    <div class=\"dtf-tr-add-element dtf-tr-element\">      <div class=\"dtf-add-bar dtf-draft-block\">        <p>        <button class=\"button-add\">          <i class=\"fa fa-plus\"></i>        </button>        </p>        <p class=\"dtf-catalog\" style=\"display:none\"></p>      </div>    </div>  ","blockChange":"    <div class=\"dtf-tr-element\">      <div class=\"dtf-change dtf-draft-block\">        <h2 data-i18n=\"layout.change_bg\"></h2>        <p class=\"dtf-change-element\"></p>      </div>    </div>  ","blockDelButton":"    <button class=\"pure-button button-del\">      <i class=\"fa fa-trash\"></i>    </button>  ","baseBlock":"    <div class=\"sortable-element\">        <table class=\"dtf-block dtf-draggable\"></table>    </div>  ","imageUploadButton":"    <button class=\"pure-button pure-button-primary dtf-upload\">      <i class=\"fa fa-upload\"></i>    </button>  ","imageUploadForm":"    <form class=\"dtf-upload\" action=\"?submited\">      <button class=\"upload-button\" type=\"button\" data-i18n=\"upload.pick_file\">        </button><input name=\"file\" id=\"file\" type=\"file\">            <button class=\"dtf-waiter\" style=\"display:none\">        <i class=\"fa fa-spinner fa-pulse\"></i>      </button>      <a href=\"#\" class=\"button-cancel\">        <i class=\"fa fa-times\"></i>      <p></p>    </a></form>  "}