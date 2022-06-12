import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import { TodoRequest } from "../types";
import { usePagination } from "@material-ui/lab/Pagination";
import { ReactComponent as NextIcon } from "../../src/assess/icon/next.svg";
import { ReactComponent as PreIcon } from "../../src/assess/icon/pre.svg";

interface Props {
  params: TodoRequest;
  handleOnchange: (params: TodoRequest) => void;
  total: number;
}

const useStyles = makeStyles({
  ul: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    justifyContent: "center",
    marginTop: 30,
    "& button": {
      margin: "0 6px",
    },
  },
  typeBtn: {
    borderRadius: 30,
    color: "#922c88",
    border: "1px solid #922c88",
    display: "flex",
    alignItems: "center",
    padding: "3px 20px",
    "& svg": {
      marginRight: 8,
      marginLeft: 8,
    },
    "&:disabled": {
      border: "1px solid #d7d7d7",
      color: "#d7d7d7",
    },
  },
  typePage: {
    borderRadius: "50%",
    width: 30,
    height: 30,
    border: "none",
    "&:hover": {
      color: "#922c88",
      border: "1px solid #922c88",
    },
  },
  selected: {
    color: "#922c88",
    border: "1px solid #922c88",
    fontWeight: 700,
  },
});

export const CustomePagination: React.FC<Props> = ({
  params,
  handleOnchange,
  total,
}) => {
  const classes = useStyles();
  const { items } = usePagination({
    count: total,
    page: +params._page,
    onChange: (event: React.ChangeEvent<unknown>, page: number) => {
      handleOnchange({ ...params, _page: page });
    },
  });

  return (
    <div>
      <ul className={classes.ul}>
        {items.map(({ page, type, selected, ...item }, index) => {
          let children = null;
          if (type === "start-ellipsis" || type === "end-ellipsis") {
            children = "…";
          } else if (type === "page") {
            children = (
              <button
                type="button"
                {...item}
                className={clsx(
                  classes.typePage,
                  selected ? classes.selected : undefined
                )}
              >
                {page}
              </button>
            );
          } else if (type === "next") {
            children = (
              <button type="button" {...item} className={classes.typeBtn}>
                Next
                <NextIcon width={12} fill="currentColor" />
              </button>
            );
          } else if (type === "previous") {
            children = (
              <button type="button" {...item} className={classes.typeBtn}>
                <PreIcon width={12} fill="currentColor" />
                Prev
              </button>
            );
          }

          return <li key={index}>{children}</li>;
        })}
      </ul>
    </div>
  );
};
