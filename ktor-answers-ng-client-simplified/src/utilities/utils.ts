import {JsonUser} from "../model/json-user";
import {User} from "../model/user";

export function remapUser(json: JsonUser): User {
    return new User(
        json.user_id,
        json.user_type,
        json.display_name,
        new Date(json.creation_date),
        json.link,
        json.location,
        json.about_me
    )
}
