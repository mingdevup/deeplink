export namespace IPrimaryButton {
    export interface IProps {
        caption?: string;
        fontSize?: number;
        actionBlock?: boolean;
        color?: string;
        disabled?: boolean;
        captionColor?: string;
        fontFamily?: string;
        secondaryColor?: boolean;
        onPress: () => void;
    }

    export interface PrimaryButtonButtonCaptionProps {
        fonstSize?: number;
        color?: string;
        actionBlock?: boolean;
        secondaryColor?: boolean;
        fontFamily?: string;
    }
}
