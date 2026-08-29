# Badge - Product Engineer

- **Applied:** 2026-08-16
- **Location:** North Vancouver (hybrid, 1 day/week in-person)
- **Stack:** React/TypeScript, Node.js, Express, Prisma, PostgreSQL
- **Posting:** https://docs.trybadge.com/reference/userpassupsert (API docs referenced in application)
- **Equity:** 0.02-0.05% + benefits
- **Backed by:** QED, Infinity
- **Clients:** Shift4, Carrefour, Hoka, Yale University

## What Badge Does

Mobile wallet platform — lets enterprise brands build experiences in Apple/Google Wallet (loyalty cards, stored value, memberships, IDs, tickets). No-code UI for marketers, APIs for devs, SDK for partners. Features: in-wallet push notifications, location-based notifications, offers, coupons, tap-to-redeem.

## Job Requirements

- 4+ years frontend + backend (I have ~2, but stack is exact match)
- Mastered TypeScript + React
- Work across the stack
- Work with designers and PMs
- Strong problem-solving

## Application Questions & My Answers

### What interests you in this role / what you bring to Badge

I've been building full-stack apps with React, TypeScript, and Node.js at my current role, and Badge's stack is pretty much what I work in every day. What caught my attention is the product itself — mobile wallets are one of those things everyone uses but nobody thinks about as a platform yet, and the idea of turning them into an engagement channel feels like genuinely unexplored territory.

I like working across the stack and owning features end to end rather than just getting handed tickets. At my current company I've built everything from APIs to frontend interfaces, and I'm used to working directly with product and design to figure out what actually makes sense to build. I'd bring that same energy to Badge — ship fast, keep the code clean, and focus on what actually moves the needle for users.

### Look at the userPassUpsert endpoint — one thing you'd do differently and why

I think this endpoint is doing too much. Creating a user and managing their wallet pass are two different concerns, and bundling them into one call makes it harder to reason about what's actually going to happen — especially when the pass field is optional and the behavior changes depending on whether you include it or not. If I just want to update a user's email, I shouldn't have to think about whether that's going to touch their passes too.

When you omit the pass object, the endpoint silently updates all of that user's passes under the template — or creates one if none exist. That feels risky. If I'm just updating a user's email and I skip the pass field, I probably don't expect passes to get touched at all. I'd want the caller to be explicit about that. Something like a selector where you say which pass you mean, or say "all" if that's actually what you want. Creating a pass can kick off real stuff like wallet downloads — that shouldn't happen by accident because a field was missing.

### Favorite JS package and why

D3. Early in my frontend work I got really into building data visualizations, and D3 was where I learned that the best UI work is really just math. Instead of handing you prebuilt charts, it gives you scales, coordinate systems, and transitions — you build everything from primitives. That forced me to actually understand what's happening on screen, not just configure options on a component. I've played around with p5.js and Three.js for similar reasons — there's something satisfying about libraries that give you raw control and let you build up from the math rather than down from abstractions.
