import React from 'react';
import { PrismCode } from '../../../components/prsimjs/Prismjs';

const Form = () => {
    return (
        <div id="form" className="block spacer m-top-xl">
            <h2>
                <span className="line">Form</span>
            </h2>

            <p>Several form control styles, layout options, and custom components for creating a wide variety of forms.</p>

            <div id="inputs">
                <h4>Inputs</h4>
                <p>Text inputs, selects and textarea.</p>

                <div id="input-primary">
                    <h5>Primary</h5>

                    <div className="bd-example">
                        <p>
                            <input type="text" placeholder="Input text"/>
                        </p>

                        <p>
                            <textarea placeholder="Textarea"></textarea>
                        </p>

                        <p>
                            <select>
                                <option>Select</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                        </p>

                        <p>
                            <input type="checkbox" id="checkbox-input"/>
                            <label htmlFor="checkbox-input" className="mb-0">Checkbox</label>
                        </p>

                        <p>
                            <input type="radio" id="radio-input"/>
                            <label htmlFor="radio-input" className="mb-0">Radio</label>
                        </p>
                    </div>

                    <PrismCode
                        code={ '' +
                        '<p>\n' +
                        '    <input type="text" placeholder="Input text">\n' +
                        '</p>\n' +
                        '\n' +
                        '<p>\n' +
                        '    <textarea placeholder="Textarea"></textarea>\n' +
                        '</p>\n' +
                        '\n' +
                        '<p>\n' +
                        '    <select>\n' +
                        '        <option>Select</option>\n' +
                        '        <option>Option 1</option>\n' +
                        '        <option>Option 2</option>\n' +
                        '    </select>\n' +
                        '</p>\n' +
                        '\n' +
                        '<p>\n' +
                        '    <input type="checkbox" id="checkbox-input">\n' +
                        '    <label for="checkbox-input" className="mb-0">Checkbox</label>\n' +
                        '</p>\n' +
                        '\n' +
                        '<p>\n' +
                        '    <input type="radio" id="radio-input">\n' +
                        '    <label for="radio-input" className="mb-0">Radio</label>\n' +
                        '</p>' +
                        '' }
                        language="html"
                        plugins={ ["line-numbers"] }
                    />
                </div>

                <div id="input-secondary">
                    <h5>Secondary</h5>

                    <div className="bd-example">
                        <p>
                            <input type="text" className="form-control" placeholder="Input text"/>
                        </p>

                        <p>
                            <textarea className="form-control" placeholder="Textarea"></textarea>
                        </p>

                        <p>
                            <select className="form-control">
                                <option>Select</option>
                                <option>Option 1</option>
                                <option>Option 2</option>
                            </select>
                        </p>

                        <p className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="custom-checkbox-input"/>
                            <label htmlFor="custom-checkbox-input" className="custom-control-label mb-0">Checkbox</label>
                        </p>

                        <p className="custom-control custom-radio">
                            <input type="radio" className="custom-control-input" id="custom-radio-input"/>
                            <label htmlFor="custom-radio-input" className="custom-control-label mb-0">Radio</label>
                        </p>
                    </div>

                    <PrismCode
                        code={ '' +
                        '<p>\n' +
                        '    <input type="text" className="form-control" placeholder="Input text">\n' +
                        '</p>        \n' +
                        '\n' +
                        '<p>\n' +
                        '    <textarea className="form-control" placeholder="Textarea"></textarea>\n' +
                        '</p>\n' +
                        '\n' +
                        '<p>\n' +
                        '    <select className="form-control">\n' +
                        '        <option>Select</option>\n' +
                        '        <option>Option 1</option>\n' +
                        '        <option>Option 2</option>\n' +
                        '    </select>\n' +
                        '</p>\n' +
                        '\n' +
                        '<p className="custom-control custom-checkbox">\n' +
                        '    <input type="checkbox" className="custom-control-input" id="custom-checkbox-input">\n' +
                        '    <label for="custom-checkbox-input" className="custom-control-label mb-0">Checkbox</label>\n' +
                        '</p>\n' +
                        '\n' +
                        '<p className="custom-control custom-radio">\n' +
                        '    <input type="radio" className="custom-control-input" id="custom-radio-input">\n' +
                        '    <label for="custom-radio-input" className="custom-control-label mb-0">Radio</label>\n' +
                        '</p>' +
                        '' }
                        language="html"
                        plugins={ ["line-numbers"] }
                    />
                </div>
            </div>

            <div id="input-group">
                <h4>Input group</h4>
                <p>Easily extend form controls by adding text, buttons, or button groups on either side of textual inputs.</p>

                <div id="input-group-primary">
                    <h5>Primary</h5>

                    <div className="bd-example">
                        <p className="input-group gutter-width-30">
                            <span className="gutter-width">
                                <input type="text" placeholder="Input text"/>
                            </span>

                            <span className="gutter-width">
                                <input type="text" placeholder="Input text"/>
                            </span>
                        </p>
                    </div>

                    <PrismCode
                        code={ '' +
                        '<p className="input-group gutter-width-30">\n' +
                        '    <span className="gutter-width">\n' +
                        '        <input type="text" placeholder="Input text">\n' +
                        '    </span>\n' +
                        '\n' +
                        '    <span className="gutter-width">\n' +
                        '        <input type="text" placeholder="Input text">\n' +
                        '    </span>\n' +
                        '</p>' +
                        '' }
                        language="html"
                        plugins={ ["line-numbers"] }
                    />
                </div>

                <div id="input-group-secondary">
                    <h5>Secondary</h5>

                    <div className="bd-example">
                        <p className="input-group gutter-width-30">
                            <span className="gutter-width">
                                <input className="form-control" type="text" placeholder="Input text"/>
                            </span>

                            <span className="gutter-width">
                                <input className="form-control" type="text" placeholder="Input text"/>
                            </span>
                        </p>
                    </div>

                    <PrismCode
                        code={ '' +
                        '<p className="input-group gutter-width-30">\n' +
                        '    <span className="gutter-width">\n' +
                        '        <input className="form-control" type="text" placeholder="Input text">\n' +
                        '    </span>\n' +
                        '\n' +
                        '    <span className="gutter-width">\n' +
                        '        <input className="form-control" type="text" placeholder="Input text">\n' +
                        '    </span>\n' +
                        '</p>' +
                        '' }
                        language="html"
                        plugins={ ["line-numbers"] }
                    />
                </div>
            </div>
        </div>
    );
};

export default Form;
