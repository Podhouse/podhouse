import React, { useRef, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useVirtual } from "react-virtual";

import EpisodeItem from "src/components/Podcast/EpisodeItem/EpisodeItem";

import { useEpisodes } from "src/queries/";
import { Episode } from "src/queries/types";

import { EpisodesContainer } from "./Episodes.styles";

type Location = {
  id: number;
};

const VirtualizedList = ({ size, children, scrollToIndexRef, ...props }: any) => {
  const parentRef = useRef<HTMLDivElement>(null);
  const rowVirtualizer = useVirtual({
    size,
    parentRef: parentRef,
  });

  if (size === 0) {
    return null;
  }

  return (
    <EpisodesContainer ref={parentRef} {...props}>
      {rowVirtualizer.virtualItems.map(({ index }) => {
        return children(index)
      })}
    </EpisodesContainer>
  );
}

const Episodes = () => {
  const { state } = useLocation<Location>();
  const { data } = useEpisodes(state.id);
  const parentRef = useRef<any>();
  const rowVirtualizer = useVirtual({
    size: data.count,
    parentRef
  });

  return (
    <EpisodesContainer ref={parentRef}>
      <div
        style={{
          height: `${rowVirtualizer.totalSize}px`,
          width: "100%",
          position: "relative"
        }}
      >
        <VirtualizedList size={data.count}>
          {(index: any) => {
            const item = data.items[index];

            return (
              <EpisodeItem
                key={item.id}
                id={item.id}
                title={item.title}
                description={item.description}
                datePublished={item.datePublished}
                duration={item.duration}
              />
            )
          }}
        </VirtualizedList>
      </div>
    </EpisodesContainer>
  );
};

export default Episodes;
