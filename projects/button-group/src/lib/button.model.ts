/**
 * Represents a button in the button group component
 */
export interface Button {
    /**
     * The text of the button
     */
    label: string;

    /**
     * The value of the button for binding with the ngModel
     */
    value: string;
}