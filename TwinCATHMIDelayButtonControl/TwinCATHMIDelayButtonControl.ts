/*
 * Generated 1/12/2022 8:39:08 AM
 * Copyright (C) 2022
 */

///<reference path="../.hmipkgs/Beckhoff.TwinCAT.HMI.Controls/TcHmiButton/TcHmiButton.d.ts" />
///<reference path="../.hmiframework/TcHmi.d.ts" />

module TcHmi {
    export module Controls {
        export module TwinCATHMIDelayButton {
            export class TwinCATHMIDelayButtonControl extends TcHmi.Controls.Beckhoff.TcHmiButton  {

                /*
                Attribute philosophy
                --------------------
                - Local variables are not set while definition in class, so they have the value 'undefined'.
                - On compile the Framework sets the value from HTML or from theme (possibly 'null') via normal setters.
                - The "changed detection" in the setter will result in processing the value only once while compile.
                - Attention: If we have a Server Binding on an Attribute the setter will be called once with null to initialize and later with the correct value.
                */

                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }

                protected __elementTemplateRoot!: JQuery;
                protected __holdTimer?: number;
                protected __holdTime?: number;
				/**
                  * If raised, the control object exists in control cache and constructor of each inheritation level was called.
                  * Call attribute processor functions here to initialize default values!
                  */
                public __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_Beckhoff_TcHmiButton-template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    // Call __previnit of base class
                    super.__previnit();
                }
                /** 
                 * Is called during control initialize phase after attribute setter have been called based on it's default or initial html dom values. 
                 * @returns {void}
                 */
                public __init() {
                    super.__init();
                    this.__holdTimer = 0;
                    this.__element[0].addEventListener("mousedown", this.PressTimerOn.bind(this), false);
                    this.__element[0].addEventListener("mouseup", this.PressTimerOff.bind(this), false);
                    this.__element[0].addEventListener("mouseleave", this.PressTimerOff.bind(this), false);
                    this.__element[0].addEventListener("touchstart", this.PressTimerOn.bind(this), false);
                    this.__element[0].addEventListener("touchend", this.PressTimerOff.bind(this), false);
                    this.__element[0].addEventListener("touchcancel", this.PressTimerOff.bind(this), false);

                }

                public PressTimerOn() {
                    if (this.__holdTimer == 0) {
                        this.__holdTimer = window.setInterval(this.DelayedTrigger.bind(this), this.__holdTime);
                    }
                }

                public PressTimerOff() {
                    if (this.__holdTimer != 0) {
                        clearInterval(this.__holdTimer);
                        this.__holdTimer = 0;
                    }
                }

                public DelayedTrigger() {
                    this.PressTimerOff();
                    TcHmi.EventProvider.raise(this.__id + ".onDelayElapsed");
                }

                public setDelayTime(valueNew: number | undefined) {
                    this.__holdTime = valueNew;
                }

                getDelayTime(): number | undefined {
                    return this.__holdTime;
                }

                /**
                * Is called by tachcontrol() after the control instance gets part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __attach() {
                    super.__attach();

                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */
                }

                /**
                * Is called by tachcontrol() after the control instance is no longer part of the current DOM.
                * Is only allowed to be called from the framework itself!
                */
                public __detach() {
                    super.__detach();

                    /**
                     * Disable everything which is not needed while the control is not part of the active dom.
                     * No need to listen to events for example!
                     */
                }

                /**
                * Destroy the current control instance. 
                * Will be called automatically if system destroys control!
                */
                public destroy() {
                    /**
                    * While __keepAlive is set to true control must not be destroyed.
                    */
                    if (this.__keepAlive) {
                        return;
                    }

                    super.destroy();

                    /**
                    * Free resources like child controls etc.
                    */
                }

            }
        }
    }
}
/**
* Register Control
*/
TcHmi.Controls.registerEx('TwinCATHMIDelayButtonControl', 'TcHmi.Controls.TwinCAT_HMI_Delay_Button', TcHmi.Controls.TwinCATHMIDelayButton.TwinCATHMIDelayButtonControl);
