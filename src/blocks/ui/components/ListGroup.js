import React from 'react';
import { PrismCode } from '../../../components/prsimjs/Prismjs';

const ListGroup = () => {
    return (
        <div id="list-group" className="block spacer m-top-xl">
            <h2>
                <span className="line">List group</span>
            </h2>

            <p>List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.</p>

            <div id="list-group-vertical">
                <h3>Vertical example</h3>

                <div className="bd-example">
                    <ul className="list-group">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                        <li className="list-group-item">Porta ac consectetur ac</li>
                        <li className="list-group-item">Vestibulum at eros</li>
                    </ul>
                </div>

                <PrismCode
                    code={ '' +
                    '<ul className="list-group">\n' +
                    '    <li className="list-group-item">Cras justo odio</li>\n' +
                    '    <li className="list-group-item">Dapibus ac facilisis in</li>\n' +
                    '    <li className="list-group-item">Morbi leo risus</li>\n' +
                    '    <li className="list-group-item">Porta ac consectetur ac</li>\n' +
                    '    <li className="list-group-item">Vestibulum at eros</li>\n' +
                    '</ul>' +
                    '' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>

            <div id="list-group-horizontal">
                <h3>Horizontal example</h3>

                <div className="bd-example">
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item">Cras justo odio</li>
                        <li className="list-group-item">Dapibus ac facilisis in</li>
                        <li className="list-group-item">Morbi leo risus</li>
                    </ul>
                </div>

                <PrismCode
                    code={ '' +
                    '<ul className="list-group list-group-horizontal">\n' +
                    '    <li className="list-group-item">Cras justo odio</li>\n' +
                    '    <li className="list-group-item">Dapibus ac facilisis in</li>\n' +
                    '    <li className="list-group-item">Morbi leo risus</li>\n' +
                    '</ul>' +
                    '' }
                    language="html"
                    plugins={ ["line-numbers"] }
                />
            </div>
        </div>
    );
};

export default ListGroup;
