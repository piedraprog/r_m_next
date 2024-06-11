export interface Character {
    /** The id of the character. */
    id: number;

    /** The name of the character. */
    name: string;

    /** The status of the character ('Alive', 'Dead' or 'unknown'). */
    status: 'Alive' | 'Dead' | 'unknown';

    /** The species of the character. */
    species: string;

    /** The type or subspecies of the character. */
    type: string;

    /** The gender of the character ('Female', 'Male', 'Genderless' or 'unknown'). */
    gender: 'Female' | 'Male' | 'Genderless' | 'unknown';

    /** Name and link to the character's origin location. */
    origin: {
        /** The name of the origin location. */
        name: string;

        /** The URL link to the origin location. */
        url: string;
    };

    /** Name and link to the character's last known location endpoint. */
    location: {
        /** The name of the last known location. */
        name: string;

        /** The URL link to the last known location endpoint. */
        url: string;
    };

    /** Link to the character's image. All images are 300x300px and most are medium shots or portraits since they are intended to be used as avatars. */
    image: string;

    /** List of episodes in which this character appeared. */
    episode: string[];

    /** Link to the character's own URL endpoint. */
    url: string;

    /** Time at which the character was created in the database. */
    created: string;
}





