import React from 'react';
import WidgetSearch from '../widget/WidgetSearch';
import WidgetComments from '../widget/WidgetComments';
import WidgetArchives from '../widget/WidgetArchives';
import WidgetCategories from '../widget/WidgetCategories';
import WidgetMeta from '../widget/WidgetMeta';

const Widget = () => {
    return (
        <aside id="aside" className="widget-area">
            <WidgetSearch />

            <WidgetComments />

            <WidgetArchives />

            <WidgetCategories />

            <WidgetMeta />
        </aside>
    );
};

export default Widget;
