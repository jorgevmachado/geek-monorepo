class Validator {
    private cepRegex = /^\d{5}\d{3}$/;
    private phoneRegex = /(^\d{10}$)|(^$)/;
    private mobileRegex = /(^\d{11}$)|(^$)/;
    private cpfRegex = /^\d{3}\d{3}\d{3}\d{2}$/;
    private emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    private numberRegex = /^[0-9]+$/;

    public isValidCep(value: string): boolean {
        return this.cepRegex.test(value);
    }

    public isValidPhone(value: string): boolean {
        return this.phoneRegex.test(value);
    }

    public isValidMobile(value: string): boolean {
        return this.mobileRegex.test(value);
    }

    public isValidCpf(value: string): boolean {
        return this.cpfRegex.test(value);
    }

    public isValidEmail(email: string): boolean {
        return this.emailRegex.test(email);
    }

    public isValidNumber(value: string): boolean {
        return this.numberRegex.test(value);
    }

    public isValidPassword(value: string): boolean {
        return value.length >= 6;
    }

    public isValidPhoneMobile(value: string): boolean {
        return value.length === 10 || value.length === 11;
    }

    public isEmpty(value: unknown): boolean {
        const type = typeof value;

        if (type === 'boolean') {
            return !value;
        }

        if (type !== 'object') {
            return !value;
        }

        return false;
    }

}

export default new Validator();