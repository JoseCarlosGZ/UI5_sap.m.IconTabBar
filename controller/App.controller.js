sap.ui.define([
    "sap/ui/core/mvc/Controller",
	"sap/m/MessageBox"
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     */
    function (Controller,
	MessageBox) {
        "use strict";

        return Controller.extend("josecarlosgz.html5module.controller.App", {
            onInit: function () {

            },
            onNavTo: function () {
                var oIconTabBar = this.getView().byId("idIconTabBar");
                oIconTabBar.setSelectedKey("key_Tab_03");
                /*! Vamos a llamar a la función "onIconTabBarPress" que tiene que recibir por parámetro un objeto tipo evento.
                Sabemos que dicho objeto tiene un método llamado getParameter() que devuelve un string que supuestamente 
                es el el "key" del IconTabFilter que ha presionado el usuario. Primero necesitamos crear un objeto evento simulado 
                incluyendo en dicho objeto las propiedades que sabemso que usará la función onIconTabBarPress. En este caso, sólo usará
                la propiedad getParameter que es de tipo función. 
                De este modo cuando se llame a la propiedad/función getParameter() en onIconTabBarPress(), como hemos sobreescrito
                getParameter() develverá automaticamente el string que le indicamos. */
                var oEventMock = { 
                    prop01_del_este_objeto: 23.45,

                    getParameter: function () { return "supuesto KEY del tab presionado"; },

                    otraPropiedad: "value de esta propiedad"
                };
                //!Llamamos a la función onIconTabBarPress y le pasamos el objecto evento simulado que hemos construido arriba
                this.onIconTabBarPress( oEventMock );
                
            },
            onIconTabBarPress: function (oEvent) {
                var sKey = oEvent.getParameter("key");
                var IconTabFilter_text ="";
                switch (sKey) {
                    case "key_Tab_01":
                        IconTabFilter_text = "IconTabFilter_01";
                        break;
                    case "key_Tab_02":
                        IconTabFilter_text = "IconTabFilter_02";
                        break;
                    case "key_Tab_03":
                        IconTabFilter_text = "IconTabFilter_03";
                        break;
                    default:
                        IconTabFilter_text = sKey;
                        break;
                }
                sap.m.MessageToast.show("El tab seleccionado es: \n" + IconTabFilter_text);
            }
        });
    });
