import React, { useCallback, useEffect, useMemo } from "react";
import GridLayout, { Layout } from "react-grid-layout";
import useLocalStorage from "use-local-storage";
import * as R from "remeda";

import NormalWidget from "../../components/widgets/NormalWidget";
import ResizableWidget from "../../components/widgets/ResizableWidget";

export const WidgetIdentifiers = {
  PURCHASE: "purchase",
  TRANSACTION: "transaction",
  EARNINGS: "earnings",
};

const StorageKeys = {
  WIDGETS: "widgets",
  LAYOUT: "layout",
};

const WIDGET_LAYOUTS = {
  purchase: {
    sm: { x: 0, y: 0, w: 2, h: 2 },
  },
  transaction: {
    sm: { x: 4, y: 0, w: 2, h: 2 },
    lg: { x: 2, y: 0, w: 8, h: 2 },

  },
  earnings: {
    sm: { x: 2, y: 0, w: 2, h: 2 },
    lg: { x: 2, y: 0, w: 8, h: 2 },
  },
};

const DEFAULT_WIDGET_STATE = R.pipe(
  WIDGET_LAYOUTS,
  R.keys,
  R.map((key) => ({ indentifier: key })),
);

const Screenone = () => {
  const [layout, setLayout] = useLocalStorage(StorageKeys.LAYOUT, undefined);
  const [widgets, setWidgets] = useLocalStorage(StorageKeys.WIDGETS, DEFAULT_WIDGET_STATE);

  useEffect(() => {
    if (layout) return;
    boostrapLayout();
  }, []);

  const boostrapLayout = useCallback(() => {
    const initial = R.map(Object.entries(WIDGET_LAYOUTS), ([key, values]) => ({
      i: key,
      ...values[Object.keys(values).shift()],
    }));
    setLayout(initial);
  }, []);

  const onLayoutChange = useCallback((newLayout) => {
    setLayout(newLayout);
  }, []);

  const onWidgetUpdate = useCallback(
    (identifier, size) => {
      const layoutDeepCopy = R.clone(layout) || [];

      const updatedLayout = R.map(layoutDeepCopy, (elm) => {
        if (elm.i === identifier) {
          const { w, h } = WIDGET_LAYOUTS[identifier][size];
          return { ...elm, w, h };
        }
        return elm;
      });

      const widgetsDeepCopy = R.clone(widgets) || [];

      const updatedWidgets = R.map(widgetsDeepCopy, (elm) => {
        if (elm.indentifier === identifier) {
          return { ...elm, ...(size ? { size } : {}) };
        }
        return elm;
      });

      setWidgets(updatedWidgets);
      setLayout(updatedLayout);
    },
    [layout, widgets]
  );

  const earningsProps = useMemo(
    () =>
      R.find(
        widgets,
        ({ indentifier }) => indentifier === WidgetIdentifiers.EARNINGS
      ),
    [widgets]
  );

  const transactionProps = useMemo(
    () =>
      R.find(
        widgets,
        ({ indentifier }) => indentifier === WidgetIdentifiers.TRANSACTION
      ),
    [widgets]
  );

  return (
    <GridLayout
      className="layout"
      layout={layout}
      cols={4}
      margin={[20, 20]}
      rowHeight={100}
      width={1400}
      onLayoutChange={onLayoutChange}
    >
      <div key={WidgetIdentifiers.PURCHASE}>
        <NormalWidget title="Purchase" />
      </div>

      <div key={WidgetIdentifiers.TRANSACTION}>
        <ResizableWidget
         title="Transaction"
         identifier={WidgetIdentifiers.TRANSACTION}
          onUpdate={onWidgetUpdate}
          size={transactionProps?.size}
          />
         
      </div>

      <div key={WidgetIdentifiers.EARNINGS}>
        <ResizableWidget
          title="Earnings"
          identifier={WidgetIdentifiers.EARNINGS}
          onUpdate={onWidgetUpdate}
          size={earningsProps?.size}
        />
      </div>
    </GridLayout>
  );
};

export default Screenone;
