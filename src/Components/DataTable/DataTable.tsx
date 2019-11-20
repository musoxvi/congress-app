import React, { useState, FC, useEffect } from "react";
import "./DataTableStyle.scss";

type Props = {
  congressList?: any;
};

const DataTable: FC<Props> = ({ congressList }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (congressList && congressList.length) {
      setData(congressList);

      setData(
        congressList.map((d: any) => {
          return {
            name: `${d.first_name} ${d.last_name}`,
            title: d.title,
            gender: d.gender === "M" ? "Male" : "Female",
            party: d.party === "R" ? "Republican" : "Democrat",
            url: d.url,
            state: d.state
          };
        })
      );
    }
  }, [congressList]);

  const renderTableHeader = () => {
    if (data.length) {
      let header = Object.keys(data[0]);
      return header.map((key, index) => {
        return <th key={index}>{key.toUpperCase()}</th>;
      });
    }
  };

  const renderTableData = () => {
    return data.map(CongressMember => {
      const { id, name, title, gender, state, party, url } = CongressMember;
      return (
        <tr key={id}>
          <td>{name}</td>
          <td>{title}</td>
          <td>{gender}</td>
          <td>{party}</td>
          <td>{url}</td>
          <td>{state}</td>
        </tr>
      );
    });
  };

  return (
    <div>
      <h1 className={"DataTable__title"}>Congress Table</h1>
      <table className={"DataTable__table"}>
        <tbody>
          <tr>{renderTableHeader()}</tr>
          {renderTableData()}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
