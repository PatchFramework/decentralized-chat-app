import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/bottts";

export default function avatarGen(name) {
    return createAvatar(style, {
        seed: name,
        dataUri: true,
        size: 32,
        backgroundColor: '#46a55c',
      })
}