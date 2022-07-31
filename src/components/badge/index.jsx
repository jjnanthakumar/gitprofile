/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import { Fragment } from 'react';
import PropTypes from 'prop-types';



const Badge = () => {
    return (
        <Fragment>
            <div className="col-span-1 lg:col-span-2">
                <div className="grid grid-cols-2 gap-6">
                    <div className="col-span-2">
                        <div className="card compact bg-gradient-to-br to-base-200 from-base-100 shadow">
                            <div className="card-body">
                                <div className="mx-3 flex items-center justify-between mb-2">
                                    <h5 className="card-title">
                                        <a
                                            href={`https://github.com/jjnanthakumar?tab=repositories`}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-base-content opacity-70"
                                        >
                                            My Badges
                                        </a>
                                    </h5>
                                </div>
                                <div className="col-span-2">
                                    <div className="grid grid-cols-1 md:grid-cols-2">
                                        {/* Badges */}
                                        <div data-iframe-width="400" data-iframe-height="270" data-share-badge-id="20ccf763-1844-43c2-a3bf-8571422339e1" data-share-badge-host="https://www.credly.com"></div>
                                        <div data-iframe-width="400" data-iframe-height="270" data-share-badge-id="97057304-c4e1-4e6f-9d4a-72f339fd33ad" data-share-badge-host="https://www.credly.com"></div>
                                        <div data-iframe-width="400" data-iframe-height="270" data-share-badge-id="69935e5c-1390-41eb-af57-98d37c7f44f3" data-share-badge-host="https://www.credly.com"></div>
                                        <div data-iframe-width="400" data-iframe-height="270" data-share-badge-id="ad286477-638c-4a9c-9543-30d7ffe7524c" data-share-badge-host="https://www.credly.com"></div>
                                        <div data-iframe-width="400" data-iframe-height="270" data-share-badge-id="9cc9cd93-97b9-45cc-980e-ce6cbc95ece2" data-share-badge-host="https://www.credly.com"></div>
                                        <div data-iframe-width="400" data-iframe-height="270" data-share-badge-id="41d6e719-d21f-4eda-8b70-925ccc8ef177" data-share-badge-host="https://www.credly.com"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};


export default Badge;
