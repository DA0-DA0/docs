import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Create DAOs',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Create DAOs with a point-and-click GUI. No command line interface.
      </>
    ),
  },
  {
    title: 'Vote and Propose',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Create and vote on proposals without writing code.
      </>
    ),
  },
  {
    title: 'Join the Cosmoverse',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Create your DAO on a Tendermint chain, and join the world of Cosmos with the magic of IBC.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
