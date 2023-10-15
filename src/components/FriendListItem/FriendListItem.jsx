import css from "./FriendListItem.module.css";

export const FriendListItem = ({ friend }) => {
  return (
    <li className={css.item}>
      <span className={friend.isOnline ? css.online : css.offline}></span>
      <img className={css.avatar} src={friend.avatar} alt="User avatar" />
      <p className="name">{friend.name}</p>
    </li>
  );
};
