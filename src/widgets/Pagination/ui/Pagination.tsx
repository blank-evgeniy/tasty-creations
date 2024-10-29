"use client";
import { classNames } from "@/shared/lib/classNames/classNames";
import styles from "./Pagination.module.scss";
import Button, { ButtonColor, ButtonTheme } from "@/shared/ui/Button/Button";
import LeftIcon from "@/shared/assets/icons/move-left.svg";
import RightIcon from "@/shared/assets/icons/move-right.svg";

interface PaginationProps {
  className?: string;
  pagesCount: number;
  currentPage: number;
  onPaginate: (newPage: number) => void;
}

export const Pagination = ({
  className,
  pagesCount,
  currentPage,
  onPaginate,
}: PaginationProps) => {
  const pageNumbers = [];

  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }

  if (pagesCount < 2) {
    return null;
  }

  return (
    <div className={classNames(styles.pagination, {}, [className])}>
      <Button
        className={styles.prev_btn}
        disabled={currentPage === 1}
        onClick={() => onPaginate(currentPage - 1)}
        theme={ButtonTheme.CIRCLE}
      >
        <LeftIcon width={24} height={24} />
      </Button>

      <div className={styles.numbers_list}>
        {pageNumbers.map((pageNumber) => (
          <Button
            theme={ButtonTheme.CIRCLE}
            color={
              pageNumber === currentPage
                ? ButtonColor.SECONDARY
                : ButtonColor.PRYMARY
            }
            className={styles.number}
            key={pageNumber}
            onClick={() => onPaginate(pageNumber)}
          >
            {pageNumber}
          </Button>
        ))}
      </div>

      <Button
        theme={ButtonTheme.CIRCLE}
        className={styles.next_btn}
        disabled={currentPage === pagesCount}
        onClick={() => onPaginate(currentPage + 1)}
      >
        <RightIcon width={24} height={24} />
      </Button>
    </div>
  );
};
