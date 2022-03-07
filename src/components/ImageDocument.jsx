import React, { useEffect, useState } from 'react';

import OpenSeaDragon from 'openseadragon';
//
//
const OpenSeaDragonViewer = () => {
  const [viewer, setViewer] = useState(null);

  const InitOpenseadragon = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    viewer && viewer.destroy();
    setViewer(
      OpenSeaDragon({
        id: 'openSeaDragon',
        prefixUrl: '/openseadragon/images/',
        animationTime: 0.5,
        blendTime: 0.1,
        constrainDuringPan: true,
        maxZoomPixelRatio: 2,
        minZoomLevel: 1,
        visibilityRatio: 1,
        zoomPerScroll: 2,
        tileSources:
          '/openseadragon/beck.dzi',
      })
    );
  };

  useEffect(() => {
    InitOpenseadragon();
    return () => {
      viewer && viewer.destroy();
    };
  }, []);

  return (
    <div
      id="openSeaDragon"
      style={{
        height: '800px',
        width: '1200px',
      }}
    ></div>
  );
};

export { OpenSeaDragonViewer };
