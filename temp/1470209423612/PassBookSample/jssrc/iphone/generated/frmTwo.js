function addWidgetsfrmTwo() {
    var button19708853624289 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button19708853624289",
        "isVisible": true,
        "onClick": p2kwiet201735961577_button19708853624289_onClick_seq0,
        "skin": "btnNormal",
        "text": "All Pass Attributes"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button2130505781599 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button2130505781599",
        "isVisible": true,
        "onClick": p2kwiet201735961577_button2130505781599_onClick_seq0,
        "skin": "btnNormal",
        "text": "Get Localized String(Pre-cond: Set Deive Locale to Spanish)"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button19708853624648 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button19708853624648",
        "isVisible": true,
        "onClick": p2kwiet201735961577_button19708853624648_onClick_seq0,
        "skin": "btnNormal",
        "text": "Get Localized String - Invalid Key"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var hbox1180790851141195 = new kony.ui.Box({
        "id": "hbox1180790851141195",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL
    }, {
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_TOP_LEFT
    }, {});
    var button1180790851141196 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1180790851141196",
        "isVisible": true,
        "onClick": p2kwiet201735961577_button1180790851141196_onClick_seq0,
        "skin": "btnNormal",
        "text": "List Passes in Server"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1180790851141197 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1180790851141197",
        "isVisible": true,
        "onClick": p2kwiet201735961577_button1180790851141197_onClick_seq0,
        "skin": "btnNormal",
        "text": "Save Passes to Mobile"
    }, {
        "containerWeight": 33,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1180790851141199 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1180790851141199",
        "isVisible": true,
        "onClick": p2kwiet201735961577_button1180790851141199_onClick_seq0,
        "skin": "btnNormal",
        "text": "Add to Passbook"
    }, {
        "containerWeight": 34,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    hbox1180790851141195.add(button1180790851141196, button1180790851141197, button1180790851141199);
    var scrbId = new kony.ui.ScrollBox({
        "enableScrollByPage": false,
        "id": "scrbId",
        "isVisible": true,
        "orientation": constants.BOX_LAYOUT_HORIZONTAL,
        "position": constants.BOX_POSITION_AS_NORMAL,
        "scrollDirection": constants.SCROLLBOX_SCROLL_HORIZONTAL,
        "scrollingEvents": {},
        "showScrollbars": true,
        "skin": "scBox"
    }, {
        "containerHeightReference": constants.CONTAINER_HEIGHT_BY_FORM_REFERENCE,
        "containerWeight": 100,
        "layoutAlignment": constants.BOX_LAYOUT_ALIGN_FROM_LEFT,
        "margin": [0, 0, 0, 0],
        "marginInPixel": false,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false,
        "percent": true
    }, {
        "bounces": true
    });
    scrbId.add();
    var button1180105658141211 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1180105658141211",
        "isVisible": true,
        "onClick": p2kwiet201735961577_button1180105658141211_onClick_seq0,
        "skin": "btnNormal",
        "text": "Add Existing Pass With Animation"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1180105658141212 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1180105658141212",
        "isVisible": true,
        "onClick": p2kwiet201735961577_button1180105658141212_onClick_seq0,
        "skin": "btnNormal",
        "text": "Add Existing Pass Without Animation"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1180105658141213 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1180105658141213",
        "isVisible": true,
        "onClick": p2kwiet201735961577_button1180105658141213_onClick_seq0,
        "skin": "btnNormal",
        "text": "Try to Modify Pass, not present in Passbook"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1180105658141214 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1180105658141214",
        "isVisible": true,
        "onClick": p2kwiet201735961577_button1180105658141214_onClick_seq0,
        "skin": "btnNormal",
        "text": "Try to Modify Pass with different identifer and serial number"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1180105658141228 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1180105658141228",
        "isVisible": true,
        "onClick": p2kwiet201735961577_button1180105658141228_onClick_seq0,
        "skin": "btnNormal",
        "text": "Get Localized String -  Spanish bundle missing (Pre-cond: Set Deive Locale to Spanish)"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1180105658141423 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1180105658141423",
        "isVisible": true,
        "onClick": p2kwiet201735961577_button1180105658141423_onClick_seq0,
        "skin": "btnNormal",
        "text": "Remove Missing Pass From Passbook"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button1180105658141424 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button1180105658141424",
        "isVisible": true,
        "onClick": p2kwiet201735961577_button1180105658141424_onClick_seq0,
        "skin": "btnNormal",
        "text": "Try to open pass with invalid URL"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    var button13898918224 = new kony.ui.Button({
        "focusSkin": "btnFocus",
        "id": "button13898918224",
        "isVisible": true,
        "onClick": p2kwiet201735961577_button13898918224_onClick_seq0,
        "skin": "btnNormal",
        "text": "Show Empty Values"
    }, {
        "containerWeight": 100,
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "hExpand": true,
        "margin": [1, 1, 1, 1],
        "marginInPixel": true,
        "padding": [0, 3, 0, 3],
        "paddingInPixel": false,
        "vExpand": false,
        "widgetAlignment": constants.WIDGET_ALIGN_CENTER
    }, {
        "glowEffect": false,
        "showProgressIndicator": true
    });
    frmTwo.add(button19708853624289, button2130505781599, button19708853624648, hbox1180790851141195, scrbId, button1180105658141211, button1180105658141212, button1180105658141213, button1180105658141214, button1180105658141228, button1180105658141423, button1180105658141424, button13898918224);
};

function frmTwoGlobals() {
    frmTwo = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmTwo,
        "bounces": true,
        "enabledForIdleTimeout": false,
        "id": "frmTwo",
        "needAppMenu": true,
        "skin": "frm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": constants.CONTAINER_LAYOUT_BOX,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "bounces": true,
        "configureExtendBottom": false,
        "configureExtendTop": false,
        "configureStatusBarStyle": false,
        "extendBottom": false,
        "extendTop": false,
        "footerOverlap": false,
        "formTransparencyDuringPostShow": 100,
        "headerOverlap": false,
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "needsIndicatorDuringPostShow": true,
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "retainScrollPosition": false,
        "statusBarStyle": constants.STATUS_BAR_STYLE_DEFAULT,
        "titleBar": true,
        "titleBarConfig": {
            "renderTitleText": true,
            "prevFormTitle": false,
            "titleBarLeftSideView": "button",
            "labelLeftSideView": "Back",
            "titleBarRightSideView": "button",
            "labelRightSideView": "Edit"
        }
    });
    frmTwo.info = {
        "kuid": "p2kwiet201735961577"
    };
};