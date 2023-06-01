import * as S from "./App.styles";
import { useState, useEffect } from "react";
import { Item } from "../types/Item";
import { Category } from "../types/Category";
import { categories } from "../data/categories";
import { items } from "../data/items";
import { getCurrentMonth, filterListByMonth } from "../helpers/dateFilter";
import { TableArea } from "../components/TableArea";

function App() {
  const [list, setList] = useState(items);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [filteredList, setFilteredList] = useState<Item[]>([]);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);
  return (
    <S.Container>
      <S.Header>
        <S.HeaderText>Sistema Financeiro</S.HeaderText>
      </S.Header>
      <S.Body>
        <TableArea list={filteredList} />
      </S.Body>
    </S.Container>
  );
}

export default App;
