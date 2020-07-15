import React from "react";
import classes from "./users.module.css";

let Users = (props) => {
    if(props.users.length == 0){
        props.setUsers([
            {
                fullName: "Maksim Likhovets",
                location: {country: "Belarus", city: "Minsk",},
                id: 1,
                imageSrc: "https://scontent-waw1-1.xx.fbcdn.net/v/t1.0-9/106966743_1715691551946042_711634502964345617_n.jpg?_nc_cat=103&_nc_sid=09cbfe&_nc_eui2=AeHjh8g5Fv4xlX-O9iYzeBaHMdTczqqGb70x1NzOqoZvvQOqvMLktlTiOyLZZTFmCSoHrNL2nlxzQbwwBaOTF1pU&_nc_oc=AQlESGJyoTfl0Wre2vNmCHWuZtq0zg3YUX6BOzu-TYzk6atKt6jw6wTG-mdVuMsPqKc&_nc_ht=scontent-waw1-1.xx&oh=707f6b743ecf49a2414bab4c99a7fc7e&oe=5F35DFF5",
                status: "Jahgo team!",
                followed: true
            },
            {
                fullName: "Ivan Ivanov",
                location: {country: "Russia", city: "Moscow",},
                id: 2,
                imageSrc: "https://histrf.ru/uploads/media/person/0001/21/thumb_20344_person_big.png",
                status: "Jahgo team!",
                followed: true
            },
            {
                fullName: "Pavel Priluchny",
                location: {country: "Belarus", city: "Brest",},
                id: 3,
                imageSrc: "https://vokrug.tv/pic/person/9/2/4/6/9246c5234fe95b412f07e1aebc6390f7.jpg",
                status: "Jahgo team!",
                followed: false
            },
        ])
    }

    return (
        <div>
            <h2>Users</h2>
            {
                props.users.map(user =>
                    <div key={user.id} className={classes.user}>
                <span>
                    <div>
                        <img src={user.imageSrc} className={classes.userImg}/>
                    </div>
                    <div>
                        {user.followed ? <button onClick={() => props.unfollowUser(user.id)}>Follow</button> :
                            <button onClick={() => {props.followUser(user.id)}}>Unfollow</button>}
                    </div>
                </span>
                <span>
                    <div className={classes.infArea}>
                        <div>
                            {user.fullName}
                            <span className={classes.location}>
                                {user.location.country},
                                {user.location.city}
                            </span>
                        </div>
                        <div>{user.status}</div>
                    </div>
                </span>
                    </div>
                )

            }
        </div>
    )
};

export default Users;