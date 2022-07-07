import { useEffect, useReducer } from "react";

import Card from "./Card";
import Footer from "./Footer";
import HeadCom from "./HeadCom";
import Navbar from "./Navbar";
import styles from "../styles/pages/women.module.css";
import { actionName, filterData, initialState, reducer } from "../utils/common";

type props<T> = {
  title: T,
  category: T
}

const PageView = ({title, category}: props<string>) => {
  const data = filterData(category);
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    window.localStorage.setItem("cart", JSON.stringify(state))
  }, [state])

  if (data?.isLoading && data?.isFetching) {
    return <h3>...Loading</h3>;
  }

  return (
    <>
      <HeadCom title={title} />
      <Navbar />
      <div className={styles.grid}>
        {data?.womenCloth &&
          data?.womenCloth.map((item: any) => {
            return (
              <>
                <Card
                  data={item}
                  state={state}
                  onClick={() =>
                    dispatch({
                      type: actionName.ADD_ITEM,
                      payload: { ...item, disable: true },
                    })
                  }
                />
              </>
            );
          })}
      </div>
      <Footer />
    </>
  );
};

export default PageView;
