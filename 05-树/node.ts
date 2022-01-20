class NodeT {
    public data: any;
    public left?: Node;
    public right?: Node;

    constructor({ data, left, right }) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}