/**
 * ダウンロード対象の曲情報を表すモデル
 */
export default class SongModel {
  private id: string;
  private title: string;
  private artist: string;
  private album: string;

  /**
   * コンストラクタ
   * @param {number} id - youtubeのid
   * @param {string} title - 曲名
   * @param {string} artist - アーティスト名
   * @param {string} album - アルバム名
   */
  constructor(id: string, title: string, artist: string, album: string) {
    this.id = id;
    this.title = title;
    this.artist = artist;
    this.album = album;
  }

  get Title() {
    return this.title;
  }

  get Artist() {
    return this.artist;
  }

  get Album() {
    return this.album;
  }
}
