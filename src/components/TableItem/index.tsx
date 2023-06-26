import * as S from "./styles";
import { Item } from "../../types/Item";
import { formatDate } from "../../helpers/dateFilter";

type Props = {
  item: Item;
};

export const TableItem = ({ item }: Props) => {
  const backgroundColor = item.category === "renda" ? "green" : "#cc0000";
  return (
    <S.TableLine>
      <S.TableColumn>{formatDate(item.date)}</S.TableColumn>
      <S.TableColumn>
        <S.Category color={backgroundColor}>{item.category}</S.Category>
      </S.TableColumn>
      <S.TableColumn>{item.title}</S.TableColumn>
      <S.TableColumn>R$ {item.value}</S.TableColumn>
    </S.TableLine>
  );
};
