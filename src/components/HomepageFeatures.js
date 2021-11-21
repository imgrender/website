import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

import styles from './HomepageFeatures.module.css';


export default function HomepageFeatures() {
    return (
        <>
            <div className={clsx(styles.content, styles.row)}>
                {/* <div className={styles.col}>
                    <img
                        alt="imgrender-稳定可靠"
                        src={useBaseUrl('img/inspector.png')}
                        srcSet={`${useBaseUrl('img/inspector.png')} 1x, ${useBaseUrl(
                            'img/inspector@2x.png',
                        )} 2x`}
                    />
                </div> */}
                <div className={styles.col}>
                    <h3>稳定可靠</h3>
                    <p>
                        imgrender 使用云计算厂家的 Serverless 产品部署，可弹性伸缩计算资源，保证运行稳定。功能更新会尽量向下兼容，不兼容更新会提前告知，预留足够时间处理。
                    </p>
                    <Link
                        className={clsx('learnmore')}
                        to={useBaseUrl('docs/getting-started')}>
                        开始使用
                    </Link>
                </div>
            </div>
            <div className={clsx(styles.content, styles.row)}>
                {/* <div className={clsx(styles.col)}>
                    <img
                        alt="imgrender-组件丰富"
                        src={useBaseUrl('img/inspector.png')}
                        srcSet={`${useBaseUrl('img/inspector.png')} 1x, ${useBaseUrl(
                            'img/inspector@2x.png',
                        )} 2x`}
                    />
                </div> */}
                <div className={styles.col}>
                    <h3>组件丰富</h3>
                    <p>
                        imgrender 支持文本、图片、二维码、矩形、直线五种组件，组件的位置、宽高、边框宽度、边框颜色等属性均可动态调整。支持思源黑体、思源宋体、阿里巴巴普惠体多种字体。
                    </p>
                    <Link
                        className={clsx('learnmore')}
                        to={useBaseUrl('docs/blueprint')}>
                        了解更多
                    </Link>
                </div>
            </div>
            <div className={clsx(styles.content, styles.row)}>
                {/* <div className={styles.col}>
                    <img
                        alt="imgrender-接入简单"
                        src={useBaseUrl('img/inspector.png')}
                        srcSet={`${useBaseUrl('img/inspector.png')} 1x, ${useBaseUrl(
                            'img/inspector@2x.png',
                        )} 2x`}
                    />
                </div> */}
                <div className={styles.col}>
                    <h3>接入简单</h3>
                    <p>
                        imgrender 核心功能为一个 HTTP API，使用 curl 命令、Postman等客户端进行调用测试。
                    </p>
                    <Link
                        className={clsx('learnmore')}
                        to={useBaseUrl('docs/blueprint')}>
                        了解更多
                    </Link>
                </div>
            </div>
        </>
    );
}
