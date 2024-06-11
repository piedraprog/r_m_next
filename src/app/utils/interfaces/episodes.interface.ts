export interface Episodes {
  /**
   * 	The id of the episode.
   */
  id: number;

  /**
     * 	The name of the episode.
     */
  name: string;

  /**
   * 	The air date of the episode.
   */
  air_date: string;


  /**
   * 	The code of the episode.
   */
  episode: string;


  /**
   * 	List of characters who have been seen in the episode.
   */
  characters: string[];

  /**
   * 	Link to the episode's own endpoint.
   */
  url: string;

  /**
   * 	Time at which the episode was created in the database.
   */
  created: string;
}





