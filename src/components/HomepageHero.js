import React from 'react';
import clsx from 'clsx';
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';

import styles from './HomepageHero.module.css';

const HomePageHero = () => {
    return (
        <div className={clsx(styles.container, 'hero')} style={{}}>
            <div className={clsx(styles.conetent)}>
                <div className={clsx(styles.col)}>
                    <h1 style={{ display: 'flex', flexDirection: 'column' }}>
                        <span>API 优先的</span>
                        <span style={{ color: '#23b47e' }}>图片动态渲染服务</span>
                    </h1>
                    <p style={{ marginTop: '4px' }}>3 分钟接入，轻松生成海报或分享图...</p>
                    <div style={{ display: 'flex' }}>
                        <div className={clsx(styles.button)}>
                            <Link
                                className={clsx(
                                    'button button--lg button--primary'
                                )}
                                to="https://app.imgrender.cn">
                                免费使用
                            </Link>
                        </div>
                        <div className={clsx(styles.button)}>
                            <Link
                                className={clsx(
                                    'button button--lg button--outline button--info'
                                )}
                                to={useBaseUrl('docs/getting-started')}>
                                查看文档
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={clsx(styles.heroVideo, styles.col)}>
                    <img src={useBaseUrl('img/usage.gif')}></img>
                </div>
            </div>
        </div>
    )
}

export default HomePageHero;