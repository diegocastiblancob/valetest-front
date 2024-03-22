export class UrlToProgramModel {
  constructor(
    public lookAndFeel: LookAndFeelModel
  ) { }
}

export class LookAndFeelModel {
  constructor(
    public lookAndFeelId: number,
    public imageBackgroundLogin: string,
    public primaryColor: string,
    public secondaryColor: string,
    public tertiaryColor: string,
    public background: string,
    public fontFamilyName: string
  ) { }
}
