//Form JS File
function frmMap_frmMap_postshow_seq0(eventobject) {
    mapLocationDataWithPolyLine.call(this);
};

function addWidgetsfrmMap() {
    var map1235278714410197 = new kony.ui.Map({
        "id": "map1235278714410197",
        "top": "0dp",
        "left": "0dp",
        "width": "100%",
        "height": "100.0%",
        "zIndex": 1,
        "isVisible": true,
        "mapKey": null,
        "provider": constants.MAP_PROVIDER_GOOGLE,
        "defaultPinImage": null,
        "calloutWidth": 80
    }, {
        "containerHeight": null,
        "marginInPixel": false,
        "paddingInPixel": false,
        "containerWeight": 100
    }, {
        "showCurrentLocation": constants.MAP_VIEW_SHOW_CURRENT_LOCATION_NONE,
        "mode": constants.MAP_VIEW_MODE_NORMAL,
        "zoomLevel": 14
    });
    frmMap.add(
    map1235278714410197);
    frmMap.setDefaultUnit(kony.flex.DP);
};

function frmMapGlobals() {
    var MenuId = [];
    frmMap = new kony.ui.Form2({
        "id": "frmMap",
        "enableScrolling": true,
        "bounces": true,
        "allowHorizontalBounce": true,
        "allowVerticalBounce": true,
        "pagingEnabled": false,
        "needAppMenu": true,
        "title": null,
        "enabledForIdleTimeout": false,
        "skin": "frm",
        "postShow": frmMap_frmMap_postshow_seq0,
        "bouncesZoom": true,
        "zoomScale": 1.0,
        "minZoomScale": 1.0,
        "maxZoomScale": 1.0,
        "layoutType": kony.flex.FREE_FORM,
        "addWidgets": addWidgetsfrmMap
    }, {
        "padding": [0, 0, 0, 0],
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "paddingInPixel": false
    }, {
        "retainScrollPosition": false,
        "needsIndicatorDuringPostShow": true,
        "formTransparencyDuringPostShow": "100",
        "inputAccessoryViewType": constants.FORM_INPUTACCESSORYVIEW_DEFAULT,
        "configureExtendTop": false,
        "configureExtendBottom": false,
        "configureStatusBarStyle": false,
        "titleBar": true,
        "footerOverlap": false,
        "headerOverlap": false,
        "inTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        },
        "outTransitionConfig": {
            "transitionDirection": "none",
            "transitionEffect": "none"
        }
    });
};