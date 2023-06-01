import * as S from "./styles";
import { Item } from "../../../types/Item";
import { formatDate } from "../../../helpers/dateFilter";

type Props = {
  item: Item;
};

export function TableItem({ item }: Props) {
  return (
    <S.TableLine>
      <S.TableColumn>{formatDate(item.date)}</S.TableColumn>
      <S.TableColumn>{item.category}</S.TableColumn>
      <S.TableColumn>{item.title}</S.TableColumn>
      <S.TableColumn>R$ {item.price} </S.TableColumn>
    </S.TableLine>
  );
}
