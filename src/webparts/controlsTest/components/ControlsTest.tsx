import * as React from 'react';
import styles from './ControlsTest.module.scss';
import { IControlsTestProps, IControlsTestState } from './IControlsTestProps';
import { ContainerCard } from '../../../controls/containerCard';

/**
 * Component that can be used to test out the React controls from this project
 */
export default class ControlsTest extends React.Component<IControlsTestProps, IControlsTestState> {
  constructor(props: IControlsTestProps) {
    super(props);
  }

  /**
   * Renders the component
   */
  public render(): React.ReactElement<IControlsTestProps> {
    return (
      <div className={styles.controlsTest}>
        <div className={styles.container}>
          <div className={`ms-Grid-row ms-bgColor-neutralLight ms-fontColor-neutralDark ${styles.row}`}>
            <div className="ms-Grid-col ms-lg10 ms-xl8 ms-xlPush2 ms-lgPush1">
              <span className="ms-font-xl">Controls testing</span>
            </div>
          </div>
          <div className={`ms-Grid-row ms-bgColor-neutralLight ms-fontColor-neutralDark ${styles.row}`}>
            <ContainerCard title={"test title"} description={"test description"} siteUrl={"http:/test.com"} />
          </div>
        </div>
      </div>
    );
  }
}
