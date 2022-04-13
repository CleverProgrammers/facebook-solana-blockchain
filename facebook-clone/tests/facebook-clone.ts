import { FacebookClone } from '../target/types/facebook_clone'

const anchor = require('@project-serum/anchor')
const { TOKEN_PROGRAM_ID } = require('@solana/spl-token')
const _ = require('lodash')
const { web3 } = anchor
const { SystemProgram } = web3
const assert = require('assert')
const utf8 = anchor.utils.bytes.utf8
const provider = anchor.Provider.local()

const defaultAccounts = {
  tokenProgram: TOKEN_PROGRAM_ID,
  clock: anchor.web3.SYSVAR_CLOCK_PUBKEY,
  systemProgram: SystemProgram.programId,
  // rent: anchor.web3.SYSVAR_RENT_PUBKEY,
}
// Configure the client to use the local cluster.
anchor.setProvider(provider)
const program = anchor.workspace.FacebookClone as Program<FacebookClone>
let creatorKey = provider.wallet.publicKey
let stateSigner

describe('facebook-clone', () => {
  it('Create State', async () => {
    ;[stateSigner] = await anchor.web3.PublicKey.findProgramAddress(
      [utf8.encode('state')],
      program.programId,
    )

    try {
      const stateInfo = await program.account.stateAccount.fetch(stateSigner)
    } catch {
      await program.rpc.createState({
        accounts: {
          state: stateSigner,
          authority: creatorKey,
          ...defaultAccounts,
        },
      })

      const stateInfo = await program.account.stateAccount.fetch(stateSigner)
      assert(
        stateInfo.authority.toString() === creatorKey.toString(),
        'State Creator is Invalid',
      )
    }
  })

  // it("Create First Post", async () => {
  //   const stateInfo = await program.account.stateAccount.fetch(stateSigner);
  //   console.log(stateInfo.postCount);

  //   if (stateInfo.postCount > 0) {
  //     return;
  //   }

  //   [postSigner] = await anchor.web3.PublicKey.findProgramAddress(
  //     [utf8.encode('post'), stateInfo.postCount.toBuffer("be", 8)],
  //     program.programId
  //   );

  //   try{
  //     const postInfo = await program.account.postAccount.fetch(postSigner);
  //     console.log(postInfo);
  //   }
  //   catch{
  //     await program.rpc.createPost("this is first post", "first", "https://first.com", {
  //       accounts: {
  //         state: stateSigner,
  //         post: postSigner,
  //         authority: creatorKey,
  //         ...defaultAccounts
  //       },
  //     })

  //     const postInfo = await program.account.postAccount.fetch(postSigner);
  //     console.log(postInfo);
  //     assert(postInfo.authority.toString() === creatorKey.toString(), "Post Creator is Invalid");
  //   }
  // });

  // it("Fetch All Posts",async () => {
  //   try{
  //     const postInfo = await program.account.postAccount.all();
  //     console.log(postInfo);
  //   }
  //   catch (e) {
  //     console.log(e);
  //   }
  // });

  // it("Create Second Post", async () => {
  //   const stateInfo = await program.account.stateAccount.fetch(stateSigner);
  //   console.log(stateInfo.postCount);

  //   if (stateInfo.postCount > 1) {
  //     return;
  //   }

  //   [postSigner] = await anchor.web3.PublicKey.findProgramAddress(
  //     [utf8.encode('post'), stateInfo.postCount.toBuffer("be", 8)],
  //     program.programId
  //   );

  //   try{
  //     const postInfo = await program.account.postAccount.fetch(postSigner);
  //     console.log(postInfo);
  //   }
  //   catch{
  //     await program.rpc.createPost("this is second post", "second", "https://second.com", {
  //       accounts: {
  //         state: stateSigner,
  //         post: postSigner,
  //         authority: creatorKey,
  //         ...defaultAccounts
  //       },
  //     })

  //     const postInfo = await program.account.postAccount.fetch(postSigner);
  //     console.log(postInfo);
  //     assert(postInfo.authority.toString() === creatorKey.toString(), "Post Creator is Invalid");
  //   }
  // });

  // it("Create Comment to first", async () => {
  //   [postSigner] = await anchor.web3.PublicKey.findProgramAddress(
  //     [utf8.encode('post'), new BN(0).toBuffer("be", 8)],
  //     program.programId
  //   );

  //   try{
  //     const postInfo = await program.account.postAccount.fetch(postSigner);
  //     console.log(postInfo);

  //     let [commentSigner] = await anchor.web3.PublicKey.findProgramAddress(
  //       [utf8.encode('comment'), postInfo.index.toBuffer("be", 8), postInfo.commentCount.toBuffer("be", 8)],
  //       program.programId
  //     );

  //     console.log(commentSigner);

  //     await program.rpc.createComment("this is great", "second", "https://second.com", {
  //       accounts: {
  //         post: postSigner,
  //         comment: commentSigner,
  //         authority: creatorKey,
  //         ...defaultAccounts
  //       },
  //     });

  //     const commentInfo = await program.account.commentAccount.fetch(commentSigner);
  //     console.log(commentInfo);
  //     assert(postInfo.authority.toString() === creatorKey.toString(), "Comment Creator is Invalid");
  //   }
  //   catch{
  //     assert(false, "Comment create failed")
  //   }
  // });

  // it("Fetch All Comments",async () => {
  //   try{
  //     const commentList = await program.account.commentAccount.all();
  //     console.log(commentList);
  //   }
  //   catch (e) {
  //     console.log(e);
  //   }
  // });
})
