import { FriendListItem } from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
export const FriendList = (props) => {
  console.log("FriendList", props.friends);
  return (
    <ul className={css.friendList}>
      {props.friends.map((friend) => {
        return <FriendListItem friend={friend} key={friend.id} />;
      })}
    </ul>
  );
};
