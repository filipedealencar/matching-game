import React, { useMemo } from "react";
import { useTable } from "react-table";
import {
  TableStyle,
  TheadStyle,
  TRStyle,
  THStyle,
  TbodyStyle,
  TDStyle,
  TableWrapper,
} from "./styles";

const CustomTable: React.FC<ICustomTable> = ({ data }) => {
  const columns = useMemo(() => {
    if (data.length === 0) {
      return [];
    }

    const sampleItem = data[0];
    return Object.keys(sampleItem).map((key) => ({
      Header: key,
      accessor: key.toLowerCase(),
    }));
  }, [data]);

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  return (
    <TableWrapper>
      <TableStyle {...getTableProps()}>
        <TheadStyle>
          {headerGroups.map((headerGroup, index) => (
            <TRStyle
              position={index}
              {...headerGroup.getHeaderGroupProps()}
              key={headerGroup.id}
            >
              {headerGroup.headers.map((column) => (
                <THStyle {...column.getHeaderProps()} key={column.id}>
                  {column.render("Header")}
                </THStyle>
              ))}
            </TRStyle>
          ))}
        </TheadStyle>
        <TbodyStyle {...getTableBodyProps()}>
          {rows.map((row, index) => {
            prepareRow(row);
            return (
              <TRStyle position={index} {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => {
                  return (
                    <TDStyle
                      {...cell.getCellProps()}
                      isTheFirst={index === 0}
                      key={cell.column.id}
                    >
                      {cell.render("Cell")}
                    </TDStyle>
                  );
                })}
              </TRStyle>
            );
          })}
        </TbodyStyle>
      </TableStyle>
    </TableWrapper>
  );
};

export default CustomTable;
