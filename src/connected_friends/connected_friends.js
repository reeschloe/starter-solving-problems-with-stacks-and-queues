const Queue = require("../lib/queue");

const connected = (G, s, r) => {
    if (!Object.keys(G).length) {
        return false;
    }

    if (s === r) {
        return true;
    }

    const enqueued = [s];
    const discovered = new Queue();

    discovered.enqueue(s)

    while (discovered.first) {
        const user = discovered.dequeue();
        for (let i = 0; i < G[user].length; i++) {
            let followedUser = G[user][i]
            if (followedUser === r) {
                return true;
            }
            if (!enqueued.includes(followedUser)) {
                enqueued.push(followedUser);
                discovered.enqueue(followedUser);
            }
        }
    }

    return false;
};

module.exports = connected;
