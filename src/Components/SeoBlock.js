import React from "react";
import Helmet from "react-helmet";

export default function SeoBlock(props) {
    const { seo } = props;
    let metaArr = [{name: 'description', content: `${seo.description}`}];
    console.log(5555)
    seo.keywords && metaArr.push({name: 'keywords', content: `${seo.keywords}`});

    return (
        <Helmet title={seo.title || 'GSK'} meta={metaArr} />
    );
}